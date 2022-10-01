import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const useModerator = () => {
  // eslint-disable-next-line no-unused-vars
  const [mod, setMod] = useState(false);
  const { status } = useSession();

  useEffect(() => {
    (async () => {
      if (status !== 'authenticated') {
        return;
      }

      const { moderator: isModerator } = await (await fetch(`/api/mod`)).json();

      setMod(isModerator);
    })();
  }, [status]);

  return mod;
};

export default useModerator;
