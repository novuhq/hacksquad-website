import findUserAndTeam from '~/helpers/find.user.and.team';
import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const { user } = await findUserAndTeam(req, res);
  if (!user?.moderator || !req?.query?.id) {
    return;
  }

  const data = await prisma.report.findUnique({
    where: {
      pr: req.query.id,
    },
  });

  if (data) {
    await prisma.report.delete({
      where: {
        pr: req.query.id,
      },
    });
    return res.json({ finish: true });
  }

  await prisma.report.create({
    data: {
      pr: req.query.id,
      status: 'DELETED',
    },
  });

  res.json({ finish: true });
}
