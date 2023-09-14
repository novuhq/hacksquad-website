import { NextResponse } from 'next/server';

import prisma from '../../../../prisma/client';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const mod = searchParams.get('mod');
  const name = searchParams.get('name');

  const users = await prisma.user.findMany({
    where: {
      AND: [
        {
          OR: [
            {
              moderator: !!mod,
            },
            {
              cleaner: !!mod,
            },
          ],
        },
        {
          name: {
            startsWith: name || '',
          },
        },
      ],
    },
    select: {
      id: true,
      name: true,
    },
    take: mod ? 1000 : 10,
  });

  return NextResponse.json(
    {
      users,
    },
    { status: 200 }
  );
}
