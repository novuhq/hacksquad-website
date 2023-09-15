import { notFound } from 'next/navigation';

import DynamicTicket from 'components/pages/ticket/dynamic-ticket';
import { auth } from 'lib/auth';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

import prisma from '../../../../../prisma/client';

const buildOgImageUrl = (data) =>
  data ? '/api/og?'.concat(new URLSearchParams(data)) : '/api/og?';

async function DynamicTicketPage({ params }) {
  const session = await auth();
  // eslint-disable-next-line no-use-before-define
  const userData = await getTicketData(params.handle);

  if (!userData) notFound();

  // Check if the current page handle matches the session handle
  const isOwnPage = session?.user?.githubHandle === params.handle;

  return <DynamicTicket user={userData} isAuthorized={!!session} isOwnPage={isOwnPage} />;
}

export async function generateMetadata({ params }) {
  const { handle } = params;
  let userData;

  if (handle) {
    try {
      userData = await prisma.user.findFirstOrThrow({
        where: {
          handle,
        },
        select: {
          name: true,
          handle: true,
          id: true,
          colorSchema: true,
          ticketId: true,
        },
      });
    } catch (err) {
      console.log('Ticket page head query err', err);
    }
  }

  if (userData) {
    return getMetadata({ ...SEO_DATA.TICKET(userData), imagePath: buildOgImageUrl(userData) });
  }
}

async function getTicketData(handle) {
  let userData = null;

  if (handle) {
    try {
      userData = await prisma.user.findFirstOrThrow({
        where: {
          handle,
        },
        select: {
          name: true,
          handle: true,
          id: true,
          colorSchema: true,
          ticketId: true,
        },
      });
    } catch (err) {
      console.log('err', err);
      userData = null;
    }
  }

  return userData;
}

export default DynamicTicketPage;
