import prisma from '~/prisma/client';

export default async function findTeamByName(name) {
  return prisma.team.findMany({
    where: {
      name: {
        equals: name,
        mode: 'insensitive',
      },
    },
  });
}
