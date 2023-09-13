import DynamicTicket from 'components/pages/dynamic-ticket';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

const TicketPage = async () => (
  <DynamicTicket />
);
export async function generateMetadata() {
  return getMetadata(SEO_DATA.TICKET);
}

export default TicketPage;
