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

  try {
    const teams = await prisma.team.findMany(data);
    return NextResponse.json(teams, { status: 200 });
  } catch (error) {
    console.error('Error fetching teams:', error);
    return NextResponse.json([]);
  }
}
