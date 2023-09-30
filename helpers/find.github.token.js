import prisma from '~/prisma/client';

const findGitHubToken = async (userId) => {
  const findGitHub = await prisma.account.findFirst({
    where: {
      userId,
    },
  });

  return findGitHub.access_token;
};

export default findGitHubToken;
