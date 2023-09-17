import prisma from '~/prisma/client';

export default async function findUser(id) {
  return prisma.user.findUnique({
    where: { id },
  });
}
