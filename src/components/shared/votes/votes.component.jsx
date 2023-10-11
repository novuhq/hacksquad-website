import { ClickVoteComponent, ClickVoteProvider } from '@clickvote/react';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import PropTypes from 'prop-types';
import { useCallback } from 'react';

const Heart = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={13} fill="#652A93" {...props}>
    <path
      fill={props.voted ? '#652A93' : 'url(#a)'}
      fillOpacity={props.voted ? 1 : 0.2}
      stroke="#fff"
      d="M6.867 11.576c-.08.047-.16.093-.24.137l-.014.008-.025-.01a9.607 9.607 0 0 1-.234-.134 16.29 16.29 0 0 1-2.744-2.05c-1.5-1.4-3-3.399-3-5.805 0-1.656 1.399-3 3.126-3h.002a3.167 3.167 0 0 1 2.483 1.182l.39.484L7 1.904A3.167 3.167 0 0 1 9.483.722h.003c1.726 0 3.124 1.344 3.124 3 0 2.407-1.5 4.406-3 5.805-.84.778-1.76 1.465-2.743 2.05Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={6.61}
        x2={6.61}
        y1={3.222}
        y2={12.222}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop stopColor="#fff" stopOpacity={1} />
      </linearGradient>
    </defs>
  </svg>
);

Heart.propTypes = {
  voted: PropTypes.bool,
};

export const LikeBtn = ({ className, moreClass, total, voted, vote }) => {
  const performClick = useCallback(() => {
    vote('single', voted ? 0 : 1);
  }, [voted]);
  return (
    <>
      <div
        className={clsx(
          'mt-10 flex items-center gap-[8.42px] rounded-full border-[1px] border-transparent bg-[#FFFFFF29] px-[19px] py-[7px] text-[15px] text-white transition-all hover:border-[1px] hover:border-[#FFFFFF1A] hover:bg-transparent',
          className,
          moreClass
        )}
        onClick={performClick}
      >
        <Heart className="h-[12px] w-[13px]" voted={voted} />
        <span>Like</span>
        <div className="h-[16px] w-[1px] bg-[#FFFFFF4D]" />
        <span>{total.count}</span>
      </div>
      <span className="text-[10px]">
        Powered by{' '}
        <a className="underline" href="https://github.com/clickvote/clickvote" target="_blank" rel="noreferrer">
          ClickVote
        </a>
      </span>
    </>
  );
};

LikeBtn.propTypes = {
  className: PropTypes.string,
  moreClass: PropTypes.string,
  total: PropTypes.number,
  voted: PropTypes.bool,
  vote: PropTypes.bool,
};

export const VotesComponent = ({ voteTo }) => {
  const session = useSession();
  if (session.status !== 'authenticated') {
    return <></>;
  }
  return (
    <ClickVoteProvider
      value={{
        apiUrl: 'socket.clickvote.dev',
        publicKey: 'pb_Q49Jy1gBQIWI0hqhEk5br7nXCNmPs3vj',
        userId: session.data.user.email,
      }}
    >
      <ClickVoteComponent id="hacksquad-team" voteTo={voteTo}>
        {(props) => <LikeBtn {...props} />}
      </ClickVoteComponent>
    </ClickVoteProvider>
  );
};

VotesComponent.propTypes = {
  voteTo: PropTypes.string,
};
