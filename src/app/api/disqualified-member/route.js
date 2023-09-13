import { ActionType } from '@prisma/client';
import { NextResponse } from 'next/server';

import findUser from 'lib/find-user';
import findUserAndTeam from 'lib/find-user-and-team';
import sendOneNotification from 'lib/send-one-notification';

import prisma from '../../../../prisma/client';

export async function GET(request) {
  const { user } = await findUserAndTeam();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!user?.moderator || !id) {
    return NextResponse.json({}, { status: 400 });
  }

  const userF = await findUser(id);

  await Promise.all([
    // Performing action on user
    prisma.user.update({
      where: { id },
      data: { disqualified: !userF.disqualified },
    }),

    // Logging the action
    prisma.actionLogs.create({
      data: {
        actionType: userF.disqualified ? ActionType.RECOVER_USER : ActionType.DISQUALIFY_USER,
        adminId: user.id,
        userId: userF.id,
      },
    }),
  ]);

  sendOneNotification('disqualified', { name: userF.name }, id);

  NextResponse.json({
    finish: true,
  });
}
