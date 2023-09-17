'use client';

import { useSession } from 'next-auth/react';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

import Button from '../button';

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
      <Button className="w-full" size="md" theme="fill-white" rel="noreferrer">
        Copy Link
      </Button>
    </CopyToClipboard>
  );
};

export default InviteButton;
