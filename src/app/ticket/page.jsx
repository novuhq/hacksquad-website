import { redirect } from 'next/navigation';

import DynamicTicket from 'components/pages/ticket/dynamic-ticket';
import { auth } from 'lib/auth';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

const buildOgImageUrl = (data) =>
  data ? '/api/og?'.concat(new URLSearchParams(data)) : '/api/og?';

const defaultUserData = {
  id: '0000000001',
  name: 'Your.Name',
  handle: 'GitHub account',
  colorSchema: '1',
};

const TicketPage = async () => {
  const session = await auth();

  if (session?.user?.handle) {
    return redirect(`/ticket/${session.user.handle}`);
  }

  return <DynamicTicket user={defaultUserData} isAuthorized={false} isDefault />;
};

export async function generateMetadata() {
  return getMetadata({
    ...SEO_DATA.TICKET(defaultUserData),
    imagePath: buildOgImageUrl(defaultUserData),
  });
}

export default TicketPage;

export const revalidate = 60;
