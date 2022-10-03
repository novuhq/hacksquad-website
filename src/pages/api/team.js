import findTeam from '~/helpers/find.team';
import findUserAndTeam from '~/helpers/find.user.and.team';

export default async (req, res) => {
  if (req.query.id) {
    try {
      const normalTeam = await findTeam(req.query.id);
    } catch (error) {
      res.status(404).json({ "I'm sorry but that team doesn't exist (yet), maybe you'll be the one to make it!" })
    }
    res.status(200).json({ team: normalTeam });
    return;
  }
  
  try {
    const { team, admin } = await findUserAndTeam(req, res);
  } catch (error) {
    res.status(404).json({ "I'm sorry but that team doesn't exist (yet), maybe you'll be the one to make it!" })
  }
  res.status(200).json({ team, admin });
};
