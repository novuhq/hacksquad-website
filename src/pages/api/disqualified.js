import findTeamById from '~/helpers/find.team.by.id';
import findUserAndTeam from '~/helpers/find.user.and.team';
import sendNotification from '~/helpers/send-notification';
import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const { user } = await findUserAndTeam(req, res);
  if (!user?.moderator || !req?.query?.id) {
    res.status(400).send();
    return;
  }

  const team = await findTeamById(req.query.id);

  await prisma.team.update({
    where: {
      id: req.query.id,
    },
    data: {
      disqualified: !team.disqualified,
    },
  });

  if (!team.disqualified) {
    res.status(200).send();
    return;
  }

  Promise.all(
    team.users.map((u) =>
      sendNotification(
        'disqualified',
        {
          name: u.name,
        },
        req.query.id
      )
    )
  );

  res.json({ finish: true });
}
