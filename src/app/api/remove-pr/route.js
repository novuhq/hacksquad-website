import { ActionType } from '@prisma/client';
import { NextResponse } from 'next/server';

import findUserAndTeam from 'lib/find-user-and-team';

import prisma from '../../../../prisma/client';

export async function GET(request) {
  const { user } = await findUserAndTeam();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const team = searchParams.get('team');

  if (!id || !team || !(user?.moderator || user?.cleaner)) {
    return NextResponse.json({ success: false, message: 'Invalid request' });
  }

  const data = await prisma.report.findUnique({
    where: {
      pr: id,
    },
  });

  if (data) {
    await Promise.all([
      // Recovering the PR
      prisma.report.delete({
        where: { pr: id },
      }),

      // Logging the action
      prisma.actionLogs.create({
        data: {
          adminId: user.id,
          teamId: team,
          pr: id,
          actionType: ActionType.RECOVER_PR,
        },
      }),
    ]);

    return NextResponse.json({
      finish: true,
      id,
      status: '',
    });
  }

  await Promise.all([
    // Marking the PR as deleted
    prisma.report.create({
      data: {
        pr: id,
        status: 'DELETED',
      },
    }),

    // Logging the action
    prisma.actionLogs.create({
      data: {
        adminId: user.id,
        pr: id,
        teamId: team,
        actionType: ActionType.DELTE_PR,
      },
    }),
  ]);

  return NextResponse.json({
    finish: true,
    id,
    status: 'DELETED',
  });
}
