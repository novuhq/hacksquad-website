import { NextResponse } from 'next/server';

import prisma from '../../../../prisma/client';

export async function POST(request) {
  try {
    const { id, colorSchema } = await request.json();

    if (id && colorSchema) {
      await prisma.user.update({
        where: { id },
        data: {
          colorSchema,
        },
      });
    } else {
      return NextResponse.json({}, { status: 400 });
    }

    return NextResponse.json({
      message: 'User updated',
    });
  } catch (e) {
    return NextResponse.json({ err: `Failed to update user – ${e.message}` });
  }
}
