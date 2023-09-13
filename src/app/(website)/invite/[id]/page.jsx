import { redirect } from 'next/navigation';

async function Invite({ params }) {
  await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/api/invite`, {
    method: 'POST',
    body: JSON.stringify({ id: params.id }),
  });

  return redirect('/my-team');
}

export default Invite;
