import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Hero from 'components/pages/claim/hero';
import Topfab from 'components/shared/FAB/topfab';
import LayoutMain from 'layouts/layouts/layout-main';

const Myteam = () => {
  const [win, setWin] = useState([]);
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const { winners } = await (
        await fetch(`/api/team`, {
          credentials: 'include',
        })
      ).json();

      if (winners.length === 0) {
        router.push('/myteam');
        return;
      }

      setWin(winners);
    })();
  }, []);

  if (!win.length) return <></>;

  return (
    <LayoutMain
      seo={{
        isRobotsNoindexPage: true,
      }}
      absolute={false}
      overflow
      withoutFooter
    >
      <Hero info={win} />
      <Topfab />
    </LayoutMain>
  );
};

export default Myteam;
