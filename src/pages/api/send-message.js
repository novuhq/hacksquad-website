import findUserAndTeam from '~/helpers/find.user.and.team';
import sendNotification from '~/helpers/send-notification';

export default async function handler(req, res) {
  const { user, team } = await findUserAndTeam(req, res);

  if (team.users.length === 1 || !req.body.contact) {
    return res.status(400).send();
  }

  sendNotification(
    'announcement',
    {
      name: user.name,
      contact: req.body.contact,
    },
    team.id,
    user.id
  );

  return res.status(200).send();
}
