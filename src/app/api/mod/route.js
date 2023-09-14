import { NextResponse } from 'next/server';

import findUserAndTeam from 'lib/find-user-and-team';

export async function GET() {
  const { user } = await findUserAndTeam();
  return NextResponse.json({
    moderator: !!user?.moderator,
    cleaner: !!user?.cleaner,
  });
}
