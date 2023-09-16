import { redirect } from 'next/navigation';

import Hero from 'components/pages/invite/hero';
import JoinUs from 'components/shared/join-us';
import { auth } from 'lib/auth';

async function Invite({ params }) {
  const session = await auth();

  if (!session?.user) {
    return redirect('/sign-in');
  }

  return (
    <>
      <Hero id={params.id} />
      <JoinUs />
    </>
  );
}

export default Invite;
