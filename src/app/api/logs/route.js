import { NextResponse } from 'next/server';

import prisma from '../../../../prisma/client';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = +(searchParams.get('page') || 1);
  const admin = searchParams.get('admin');
  const team = searchParams.get('team');
  const user = searchParams.get('user');
  const prType = searchParams.get('prType');

  const data = await prisma.actionLogs.findMany({
    where: {
      AND: [
        {
          OR: [
            {
              prDetails: {
                not: null,
              },
            },
            {
              pr: null,
            },
          ],
        },
        ...[admin ? { adminId: admin } : {}],
        ...[team ? { teamId: team } : {}],
        ...[user ? { userId: user } : {}],
        ...[prType ? { actionType: prType } : {}],
      ],
    },
    orderBy: [{ createdAt: 'desc' }],
    take: 30,
    skip: 30 * (page - 1),
    select: {
      id: true,
      prDetails: true,
      actionType: true,
      team: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },
      user: {
        select: {
          id: true,
          name: true,
          handle: true,
        },
      },
      admin: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return NextResponse.json(
    data.map(
      (d) => ({
        ...d,
        prDetails: JSON.parse(d.prDetails || '{}'),
      }),
      { status: 200 }
    )
  );
}
