import { NextResponse } from 'next/server';

import prisma from 'utils/prisma';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const colorSchema = searchParams.get('colorSchema');

    if (id && colorSchema) {
      try {
        const updateUser = await prisma.user.update({
          where: { id },
          data: {
            colorSchema,
          },
        });

        return NextResponse.json(updateUser);
      } catch (e) {
        return NextResponse.json({ err: 'Error occurred while updating user data' });
      }
    } else {
      return NextResponse.json({ err: 'Not found user id or color schema' });
    }
  } catch (e) {
    return NextResponse.json({ err: 'Failed to update user' });
  }
}
