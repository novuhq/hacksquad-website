import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function Friend({ params }) {
  if (params.id) {
    cookies().set('invite', params.id, {
      maxAge: 60 * 6 * 24,
    });
  }

  return redirect('/');
}

export default Friend;
