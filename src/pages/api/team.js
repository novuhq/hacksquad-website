import findTeam from '~/helpers/find.team';
import findUserAndTeam from '~/helpers/find.user.and.team';

export default async (req, res) => {
  if (req.query.id) {
    const normalTeam = await findTeam(req.query.id);
    console.log(normalTeam);
    res.status(200).json({ team: normalTeam });
    return;
  }

  const { team, admin } = await findUserAndTeam(req, res);
  res.status(200).json({ team, admin });
};
