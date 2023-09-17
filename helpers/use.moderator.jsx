import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const useModerator = () => {
  const [cleaner, setCleaner] = useState(false);
  const [moderator, setModerator] = useState(false);

  const { status } = useSession();

  //
  const getModDetails = async () => {
    const { moderator: isModerator, cleaner: isCleaner } = await fetch('/api/mod').then((res) =>
      res.json()
    );

    setModerator(isModerator);
    setCleaner(isCleaner);
  };

  //
  useEffect(() => {
    getModDetails();
  }, [status]);

  //
  return { moderator, cleaner };
};

export default useModerator;
