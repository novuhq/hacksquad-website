'use client';

import clsx from 'clsx';
import PropTypes from 'prop-types';

import useCopyToClipboard from 'hooks/use-copy-to-clipboard';
import CopyIcon from 'svgs/copy.inline.svg';

import TwitterShareButton from './twitter-share-button';

const SocialShare = ({ className = null, url }) => {
  const { isCopied, handleCopy } = useCopyToClipboard(3000);

  return (
    <div className={clsx('flex items-center gap-3 lg:gap-x-3', className)}>
      <TwitterShareButton
        className="flex h-11 items-center gap-3 rounded border border-gray-1 px-5 text-18 font-medium leading-none text-white transition-colors duration-200 hover:border-[#6D7277] hover:bg-[rgba(255,255,255,0.10)] xs:h-9 xs:gap-2 xs:px-3 xs:text-14"
        url={url}
        shareText="I am participating in HackSquad 2023, share your card and win awesome swag! @HackSquadDev @ToolJet @CrowdDotDev @WaspLang @novuhq @hanko_io"
      >
        Share
      </TwitterShareButton>
      <button
        className={clsx(
          'flex h-11 items-center gap-3 rounded border border-gray-1 px-5 text-18 font-medium leading-none text-white transition-colors duration-200 hover:border-[#6D7277] hover:bg-[rgba(255,255,255,0.10)] xs:h-9 xs:gap-2 xs:px-3 xs:text-14',
          isCopied && 'pointer-events-none'
        )}
        type="button"
        disabled={isCopied}
        onClick={() => handleCopy(url)}
      >
        <p className="min-w-[82px] xs:min-w-[64px]">{isCopied ? 'Copied!' : 'Copy link'}</p>
        <CopyIcon className="h-5 shrink-0 xs:h-4" aria-hidden />
      </button>
    </div>
  );
};

SocialShare.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default SocialShare;
