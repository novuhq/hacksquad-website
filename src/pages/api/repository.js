import findUserAndTeam from '~/helpers/find.user.and.team';
import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const { user } = await findUserAndTeam(req, res);

  if (!req?.query?.id || !(user?.moderator || user?.cleaner)) {
    res.json({ success: false, message: 'Invalid request' });
    return;
  }

  const status = await prisma.repositories.findFirst({
    where: {
      url: req.query.id,
    },
  });

  res.json({
    status: status?.status,
  });
}
