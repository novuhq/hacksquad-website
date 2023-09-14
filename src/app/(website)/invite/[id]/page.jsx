import { redirect } from 'next/navigation';

import { auth } from 'lib/auth';

async function Invite({ params }) {
  const session = await auth();

  if (!session?.user) {
    return redirect('/sign-in');
  }

  await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/api/invite`, {
    method: 'POST',
    body: JSON.stringify({ id: params.id }),
  });

  return redirect('/my-team');
}

export default Invite;
