import DynamicTicket from 'components/pages/ticket/dynamic-ticket';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

const buildOgImageUrl = (data) =>
  data ? '/api/og?'.concat(new URLSearchParams(data)) : '/api/og?';

const defaultUserData = {
  ticketId: '0000000001',
  name: 'Your Name',
  handle: 'GitHub',
  colorSchema: '1',
};

const TicketPage = async () => (
  <DynamicTicket user={defaultUserData} isAuthorized={false} isDefault />
);

export async function generateMetadata() {
  return getMetadata({
    ...SEO_DATA.TICKET(defaultUserData),
    imagePath: buildOgImageUrl(defaultUserData),
  });
}

export default TicketPage;
