import { NextResponse } from 'next/server';

import findUserAndTeam from 'lib/find-user-and-team';

import prisma from '../../../../prisma/client';

export async function POST(request) {
  const body = await request.json();
  if (!body.name || body.name.length < 2 || !body.hasOwnProperty('allowAutoAssign')) {
    return NextResponse.json(
      {
        error: 'Invalid parameters',
      },
      { status: 400 }
    );
  }
  const { admin, team } = await findUserAndTeam();
  if (!admin && !team) {
    return NextResponse.json(
      {
        error: 'Invalid call',
      },
      { status: 400 }
    );
  }

  await prisma.team.update({
    where: {
      id: team.id,
    },
    data: {
      name: body.name,
      allowAutoAssign: !!body.allowAutoAssign,
    },
  });

  NextResponse.json({ message: 'changed' }, { status: 200 });
}
