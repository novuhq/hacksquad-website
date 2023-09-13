import { NextResponse } from 'next/server';

import prisma from '../../../../prisma/client';

export async function GET() {
  const data = {
    orderBy: {
      score: 'desc',
    },
    where: {
      disqualified: false,
    },
    select: {
      id: true,
      name: true,
      score: true,
      slug: true,
    },
  };

  const teams = await prisma.team.findMany({
    data,
  });

  return NextResponse.json(teams);
}
