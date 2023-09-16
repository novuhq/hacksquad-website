import { redirect } from 'next/navigation';

import { auth } from 'lib/auth';

async function joinTeam(id, sessionUser) {
  await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/api/invite`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, sessionUser }),
  });

  return redirect('/my-team');
}

async function Invite({ params }) {
  const session = await auth();

  if (!session?.user) {
    return redirect('/sign-in');
  }

  await joinTeam(params.id, session);
}

export default Invite;
