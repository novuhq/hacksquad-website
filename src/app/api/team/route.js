import { NextResponse } from 'next/server';

import findTeam from 'lib/find-team';
import findUserAndTeam from 'lib/find-user-and-team';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    try {
      const normalTeam = await findTeam(id);
      return NextResponse.json({ team: normalTeam });
    } catch (error) {
      return NextResponse.json(
        {
          error: "I'm sorry but that team doesn't exist (yet), maybe you'll be the one to make it!",
        },
        { status: 404 }
      );
    }
  }

  try {
    const { team, admin, winners } = await findUserAndTeam();

    return NextResponse.json({ team, admin, winners });
  } catch (error) {
    return NextResponse.json(
      {
        error: "I'm sorry but that team doesn't exist (yet), maybe you'll be the one to make it!",
      },
      { status: 404 }
    );
  }
}
