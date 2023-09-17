'use client';

import { useCallback, useState } from 'react';

import Button from 'components/shared/button';

import CreateASquad from './create-a-squad';
import Popup from './popup';

const WithoutTeam = () => {
  const [modal, setModal] = useState(false);

  const changeModal = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  const autoAssign = useCallback(async () => {
    await fetch('/api/auto-join', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    window.location.reload();
  }, []);

  return (
    <div className="mx-auto mt-[72px] flex max-w-[215px] flex-col items-center justify-center gap-y-10">
      <Button className="w-full" theme="fill-white" size="sm" to="/join-squad">
        Join a squad
      </Button>
      <Button
        className="w-full"
        data-modal-toggle="defaultModal"
        theme="fill-white"
        size="sm"
        onClick={changeModal}
      >
        Create a new squad
      </Button>
      {modal && (
        <Popup close={changeModal}>
          <CreateASquad />
        </Popup>
      )}
      <Button className="w-full" theme="fill-white" size="sm" onClick={autoAssign}>
        Auto assign me
      </Button>
    </div>
  );
};

export default WithoutTeam;
