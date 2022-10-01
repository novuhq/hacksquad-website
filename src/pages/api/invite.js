import findUserAndTeam from '~/helpers/find.user.and.team';
import sendNotification from '~/helpers/send-notification';
import prisma from '~/prisma/client';

export default async (req, res) => {
  const { user, team } = await findUserAndTeam(req, res);
  const teamInfo = await prisma.team.findUnique({
    where: {
      id: req.body.id,
    },
    include: {
      users: true,
    },
  });

  if (!user || team || teamInfo.users.length >= 5) {
    res.status(400).send("Something isn't right");
    return;
  }
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      teamId: req.body.id,
    },
  });

  sendNotification(
    'new-squad-member',
    {
      name: user.name,
    },
    req.body.id,
    user.id
  );

  res.status(200).send('completed');
};
