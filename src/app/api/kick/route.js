import { ActionType } from '@prisma/client';
import { NextResponse } from 'next/server';

import findUserAndTeam from 'lib/find-user-and-team';

import prisma from '../../../../prisma/client';

export async function GET(request) {
  const { user } = await findUserAndTeam();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!user?.moderator || !id) {
    return;
  }

  const data = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      team: true,
    },
  });

  const users = await prisma.user.findMany({
    where: {
      teamId: data.team.id,
    },
  });

  // Logging the action
  await prisma.actionLogs.create({
    data: {
      actionType: ActionType.KICK_USER,
      adminId: user.id,
      userId: id,
    },
  });

  await prisma.user.update({
    where: {
      id,
    },
    data: {
      teamId: null,
    },
  });

  // not only one in the team
  if (users.length > 1 && data?.id === data?.team?.ownerId) {
    const randomUser = users.find((u) => u.id !== id);
    await prisma.team.update({
      where: {
        id: data.team.id,
      },
      data: {
        ownerId: randomUser.id,
      },
    });
  } else if (users.length === 1) {
    await prisma.team.delete({
      where: {
        id: data.team.id,
      },
    });
  }

  return NextResponse.json({
    finish: true,
  });
}
