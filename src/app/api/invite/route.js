import { NextResponse } from 'next/server';

import findUserAndTeam from 'lib/find-user-and-team';
import sendNotification from 'lib/send-notification';

import prisma from '../../../../prisma/client';

export async function POST(request) {
  const body = await request.json();

  const { user, team } = await findUserAndTeam(body?.sessionUser);

  const teamInfo = await prisma.team.findUnique({
    where: {
      id: body.id,
    },
    include: {
      users: true,
    },
  });

  if (!user || team || teamInfo.users.filter((f) => !f.disqualified).length >= 5) {
    return NextResponse.json(
      {
        error: "Something isn't right",
      },
      { status: 400 }
    );
  }

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      teamId: body.id,
    },
  });

  sendNotification(
    'new-squad-member',
    {
      name: user.name,
    },
    body.id,
    user.id
  );

  return NextResponse.json(
    {
      message: 'completed',
    },
    { status: 200 }
  );
}
