import DynamicTicket from 'components/pages/dynamic-ticket';
import { auth } from 'lib/auth';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';
import prisma from 'utils/prisma';

const buildOgImageUrl = (data) =>
  data ? '/api/og?'.concat(new URLSearchParams(data)) : '/api/og?';

const TicketPage = async ({ params }) => {
  const session = await auth();
  // eslint-disable-next-line no-use-before-define
  const userData = await getTicketData(params.handle);

  return <DynamicTicket user={userData} session={session} />;
};

export async function generateMetadata({ params }) {
  const { handle } = params;
  let userData;

  if (handle) {
    try {
      userData = await prisma.user.findUnique({
        where: {
          login: handle,
        },
        select: {
          name: true,
          email: true,
          login: true,
          id: true,
          colorSchema: true,
        },
      });
    } catch (err) {
      console.log('Ticket page head query err', err);
    }
  }

  if (userData) {
    return getMetadata({ ...SEO_DATA.TICKET(userData), imagePath: buildOgImageUrl(userData) });
  }

  return getMetadata(SEO_DATA.DEFAULT_TICKET);
}

async function getTicketData(handle) {
  let userData = null;

  if (handle) {
    try {
      userData = await prisma.user.findFirstOrThrow({
        where: {
          login: handle,
        },
        select: {
          name: true,
          email: true,
          login: true,
          id: true,
          colorSchema: true,
        },
      });
    } catch (err) {
      console.log('err', err);
      userData = null;
    }
  }

  return userData;
}

export async function generateStaticParams() {
  const users = await prisma.user.findMany();

  return users.map((user) => ({
    handle: user.login,
  }));
}

export default TicketPage;

export const revalidate = 60;
