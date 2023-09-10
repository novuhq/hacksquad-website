import findUserAndTeam from '~/helpers/find.user.and.team';

export default async function twitter(req, res, query) {
  const { user, twitter, devto } = await findUserAndTeam(req, res);

  if (!user?.id || !query.code) {
    return { props: { twitter, devto } };
  }

  return {
    redirect: {
      permanent: false,
      destination: '/bonuses',
    },
  };
}
