import findUserAndTeam from '~/helpers/find.user.and.team';
import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const { user } = await findUserAndTeam(req, res);

  if (!req?.body?.url || !req?.body?.status || !(user?.moderator || user?.cleaner)) {
    res.json({ success: false, message: 'Invalid request' });
    return;
  }

  await prisma.repositories.update({
    where: {
      url: req.body.url,
    },
    data: {
      status: req.body.status,
    },
  });

  res.json({
    status: req.body.status,
  });
}
