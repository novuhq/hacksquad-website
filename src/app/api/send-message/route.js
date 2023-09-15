import { NextResponse } from 'next/server';

import findUserAndTeam from 'lib/find-user-and-team';
import sendNotification from 'lib/send-notification';

export async function POST(request) {
  const body = await request.json();
  const { user, team } = await findUserAndTeam();

  if (team.users.length === 1 || !body.contact) {
    return NextResponse.json(
      {
        error: '',
      },
      { status: 400 }
    );
  }

  sendNotification(
    'announcement',
    {
      name: user.name,
      contact: body.contact,
    },
    team.id,
    user.id
  );

  return NextResponse.json(
    { message: 'Your message has been sent to your squad!' },
    { status: 200 }
  );
}
