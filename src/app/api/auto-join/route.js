import { NextResponse } from 'next/server';

import createSlug from 'lib/create-slug';
import findUserAndTeam from 'lib/find-user-and-team';
import sendNotification from 'lib/send-notification';

import prisma from '../../../../prisma/client';

export async function GET() {
  const { team, user } = await findUserAndTeam();
  if (team) {
    return NextResponse.json(
      {
        message: 'You are already in a squad',
      },
      { status: 400 }
    );
  }

  const findTeam = await prisma.$queryRaw`
SELECT "Team"."id" FROM "Team"
LEFT JOIN "User" ON ("Team"."id" = "User"."teamId")
WHERE "Team"."allowAutoAssign" = true and "User"."disqualified" = false and "Team"."disqualified" = false
GROUP BY "Team"."id"
HAVING count("User"."id") < 5
ORDER BY count("User"."id")
LIMIT 1
`;

  if (findTeam.length) {
    sendNotification(
      'new-squad-member',
      {
        name: user.name,
      },
      findTeam[0].id,
      user.id
    );

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        teamId: findTeam[0].id,
      },
    });

    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  }

  const { id } = await prisma.team.create({
    data: {
      name: `${user.name}'s Team`,
      slug: createSlug(`${user.name}'s Team`),
      score: 0,
      ownerId: user.id,
      allowAutoAssign: true,
    },
  });

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      teamId: id,
    },
  });

  NextResponse.json(
    {
      success: true,
    },
    { status: 200 }
  );
}
