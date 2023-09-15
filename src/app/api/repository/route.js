import { NextResponse } from 'next/server';

import findUserAndTeam from 'lib/find-user-and-team';

import prisma from '../../../../prisma/client';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const { user } = await findUserAndTeam();

  if (!id || !(user?.moderator || user?.cleaner)) {
    return NextResponse.json({ success: false, message: 'Invalid request' });
  }

  const status = await prisma.repositories.findFirst({
    where: {
      url: id,
    },
  });

  return NextResponse.json({
    status: status?.status,
  });
}
