import findUserAndTeam from '~/helpers/find.user.and.team';
import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const { user } = await findUserAndTeam(req, res);
  if (!user?.moderator || !user?.cleaner || !req?.query?.id) {
    return;
  }

  const data = await prisma.report.findUnique({
    where: {
      pr: req.query.id,
    },
  });

  // Recovering the PR if it is marked as deleted
  if (data) {
    await prisma.report.delete({
      where: {
        pr: req.query.id,
      },
    });

    res.json({
      finish: true,
      id: req.query.id,
      status: '',
    });

    return;
  }

  // Marking the PR as deleted
  await prisma.report.create({
    data: {
      pr: req.query.id,
      status: 'DELETED',
    },
  });

  res.json({
    finish: true,
    id: req.query.id,
    status: 'DELETED',
  });
}
