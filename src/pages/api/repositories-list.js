import findUserAndTeam from '~/helpers/find.user.and.team';
import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const { user } = await findUserAndTeam(req, res);

  if (!req?.query?.page || !(user?.moderator || user?.cleaner)) {
    res.json({ success: false, message: 'Invalid request' });
    return;
  }

  const repositories = await prisma.repositories.findMany({
    skip: (req.query.page - 1) * 10,
    take: 10,
    orderBy: {
      status: 'asc',
    },
  });

  res.json({
    repositories,
  });
}
