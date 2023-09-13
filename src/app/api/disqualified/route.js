import { ActionType } from '@prisma/client';
import { NextResponse } from 'next/server';

import findTeamById from 'lib/find-team-by-id';
import findUserAndTeam from 'lib/find-user-and-team';
import sendNotification from 'lib/send-notification';

import prisma from '../../../../prisma/client';

export async function GET(request) {
  const { user } = await findUserAndTeam();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!user?.moderator || !id) {
    return NextResponse.json({}, { status: 400 });
  }

  const teamF = await findTeamById(id);

  await Promise.all([
    // Performing action on team
    prisma.team.update({
      where: { id },
      data: { disqualified: !teamF.disqualified },
    }),

    // Logging the action
    prisma.actionLogs.create({
      data: {
        actionType: teamF.disqualified ? ActionType.RECOVER_TEAM : ActionType.DISQUALITY_TEAM,
        adminId: user.id,
        teamId: teamF.id,
      },
    }),
  ]);

  if (!teamF.disqualified) {
    return NextResponse.json({}, { status: 200 });
  }

  Promise.all(
    teamF.users.map((u) =>
      sendNotification(
        'disqualified',
        {
          name: u.name,
        },
        id
      )
    )
  );

  NextResponse.json(
    {
      finish: true,
    },
    { status: 200 }
  );
}
