import { NextResponse } from 'next/server';

import createSlug from 'lib/create-slug';
import findUserAndTeam from 'lib/find-user-and-team';

import prisma from '../../../../prisma/client';

export async function POST(request) {
  const body = await request.json();

  if (!body.name || body.name.length < 2) {
    return NextResponse.json(
      {
        error: 'You must specify the squad name',
      },
      { status: 400 }
    );
  }
  const { team, user } = await findUserAndTeam();
  if (team) {
    return NextResponse.json(
      {
        error: 'You are already in a squad',
      },
      { status: 400 }
    );
  }

  const { id } = await prisma.team.create({
    data: {
      name: body.name,
      slug: createSlug(body.name),
      score: 0,
      ownerId: user.id,
      allowAutoAssign: false,
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
