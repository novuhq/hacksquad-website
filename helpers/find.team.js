import prisma from '~/prisma/client';

export default async function findTeam(id) {
  return prisma.team.findUnique({
    where: { slug: id },
    include: {
      users: true,
    },
  });
}
