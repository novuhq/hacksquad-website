import prisma from '~/prisma/client';

export default async function findTeamById(id) {
  return prisma.team.findUnique({
    where: { id },
    include: {
      users: true,
    },
  });
}
