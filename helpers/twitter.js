import findUserAndTeam from '~/helpers/find.user.and.team';
import prisma from '~/prisma/client';

export default async function twitter(req, res, query) {
  const { user, twitter, devto } = await findUserAndTeam(req, res);
  const findStars = await prisma.starsGiven.findMany({
    where: {
      userId: user.id,
    },
  });

  if (!user?.id || !query.code) {
    return { props: { twitter, devto, findStars } };
  }

  return {
    redirect: {
      permanent: false,
      destination: '/bonuses',
    },
  };
}
