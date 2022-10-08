import { useEffect, useState } from 'react';

import Hero from 'components/pages/team/hero';
import Topfab from 'components/shared/FAB/topfab';
import LayoutMain from 'layouts/layouts/layout-main';

const Myteam = () => {
  const [info, setInfo] = useState(false);
  useEffect(() => {
    const getTeam = async () => {
      const data = await fetch(`/api/team`, {
        credentials: 'include',
      });
      const json = await data.json();
      setInfo(json);
    };
    getTeam();
  }, []);

  if (!info) return <></>;
  return (
    <LayoutMain
      seo={{
        isRobotsNoindexPage: true,
      }}
      absolute={false}
      overflow
      withoutFooter
    >
      <Hero info={info} />
      <Topfab />
    </LayoutMain>
  );
};

export default Myteam;
