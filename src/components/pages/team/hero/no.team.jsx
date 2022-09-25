import Link from 'next/link';
import { useCallback, useState } from 'react';

import Popup from '../popup';

import CreateASquad from './create.a.squad';

const NoTeam = () => {
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
    <>
      <Link href="/joinsquad">
        <a
          className="cta-btn-animation relative mt-10 flex h-[60px] max-w-full items-center justify-center leading-none sm:mt-6"
          style={{ cursor: 'pointer' }}
        >
          <svg
            className="cta-btn-animation-border xs:w-full"
            width="268"
            height="59"
            viewBox="0 0 268 59"
            fill="none"
          >
            <path d="M1 58V1H251.586L267 16.4142V58H1Z" stroke="white" strokeWidth="2" />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center space-x-2.5">
            <span className="text-lg sm:text-[18px]">Join a squad</span>
          </div>
        </a>
      </Link>
      <a
        data-modal-toggle="defaultModal"
        className="cta-btn-animation relative mt-10 flex h-[60px] max-w-full items-center justify-center leading-none sm:mt-6"
        href="javascript:void(0)"
      >
        <svg
          className="cta-btn-animation-border xs:w-full"
          width="268"
          height="59"
          viewBox="0 0 268 59"
          fill="none"
        >
          <path d="M1 58V1H251.586L267 16.4142V58H1Z" stroke="white" strokeWidth="2" />
        </svg>

        <div
          className="absolute inset-0 flex items-center justify-center space-x-2.5"
          onClick={changeModal}
        >
          <span className="text-lg sm:text-[18px]">Create a new squad</span>
        </div>
      </a>
      {modal && (
        <Popup close={changeModal}>
          <CreateASquad />
        </Popup>
      )}
      <a
        className="cta-btn-animation relative mt-10 flex h-[60px] max-w-full items-center justify-center leading-none sm:mt-6"
        style={{ cursor: 'pointer' }}
        onClick={autoAssign}
      >
        <svg
          className="cta-btn-animation-border xs:w-full"
          width="268"
          height="59"
          viewBox="0 0 268 59"
          fill="none"
        >
          <path d="M1 58V1H251.586L267 16.4142V58H1Z" stroke="white" strokeWidth="2" />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center space-x-2.5">
          <span className="text-lg sm:text-[18px]">Auto assign me</span>
        </div>
      </a>
    </>
  );
};

export default NoTeam;
