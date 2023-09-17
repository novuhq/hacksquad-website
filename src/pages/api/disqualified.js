import { ActionType } from '@prisma/client';

//
import findTeamById from '~/helpers/find.team.by.id';
import findUserAndTeam from '~/helpers/find.user.and.team';
import sendNotification from '~/helpers/send-notification';
import prisma from '~/prisma/client';

//
export default async function handler(req, res) {
  const { user } = await findUserAndTeam(req, res);
  if (!user?.moderator || !req?.query?.id) {
    res.status(400).send();
    return;
  }

  const teamF = await findTeamById(req.query.id);

  await Promise.all([
    // Performing action on team
    prisma.team.update({
      where: { id: req.query.id },
      data: { disqualified: !teamF.disqualified },
    }),

    // Logging the action
    prisma.actionLogs.create({
      data: {
        actionType: teamF.disqualified ? ActionType.RECOVER_TEAM : ActionType.DISQUALITY_TEAM,
        adminId: user.id,
        teamId: teamF.id,
      },
    }),
  ]);

  if (!teamF.disqualified) {
    res.status(200).send();
    return;
  }

  Promise.all(
    teamF.users.map((u) =>
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
