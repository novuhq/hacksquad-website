import findUserAndTeam from 'lib/find-user-and-team';

export default async function twitter(query) {
  const { user, twitter, devto } = await findUserAndTeam();

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
