import { useSession } from 'next-auth/react';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

const InviteButton = () => {
  const session = useSession();
  if (session.status !== 'authenticated') {
    return <></>;
  }

  const id = Buffer.from(session.data.user.email).toString('base64');
  return (
    <CopyToClipboard
      text={`${window.location.origin}/friend/${id}`}
      onCopy={() => toast.success('Copied to clipboard')}
    >
      <a
        className="cta-btn-animation relative flex max-w-full cursor-pointer items-center justify-center leading-none"
        rel="noreferrer"
      >
        <svg
          className="cta-btn-animation-border xs:w-full"
          width="200"
          height="59"
          viewBox="0 0 268 59"
          fill="none"
        >
          <path d="M1 58V1H251.586L267 16.4142V58H1Z" stroke="white" strokeWidth="2" />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center space-x-2.5">
          <span className="text-lg sm:text-[18px]">Copy Link</span>
        </div>
      </a>
    </CopyToClipboard>
  );
};

export default InviteButton;
