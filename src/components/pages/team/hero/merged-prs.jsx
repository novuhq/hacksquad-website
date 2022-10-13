import PropTypes from 'prop-types';
import React, { useState } from 'react';

import GitHubIcon from '../../../../icons/github.inline.svg';

import useModerator from '~/helpers/use.moderator';

const MergedPrs = ({ team }) => {
  const { moderator, cleaner } = useModerator();

  const [pullRequests, setPullRequests] = useState(JSON.parse(team?.prs || '[]'));

  //
  const removePr = (id) => async () => {
    const response = await fetch(`/api/remove-pr?id=${id}`).then((res) => res.json());

    const updatedPrList = [...pullRequests].map((pr) =>
      pr.id === response.id ? { ...pr, status: response.status } : pr
    );

    setPullRequests(updatedPrList);
  };

  //
  return (
    <>
      <h2 className="mt-20 font-mono text-lg font-bold uppercase leading-tight lg:text-[25px] md:text-[25px] xs:text-[25px]">
        {'>>'}Latest Merged Pull Requests
      </h2>

      <div className="md:scrollbar-hidden mx-auto mt-20 max-w-[1220px] bg-black md:max-w-none md:overflow-x-auto">
        <div className="mt-5 md:min-w-[1080px] md:px-7 sm:px-4">
          <div className="grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b border-gray-2 pb-4 lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr] sm:grid-cols-[170px_50px_100px]">
            <span className="font-medium uppercase sm:hidden">Place</span>
            <span className="font-medium uppercase">Name</span>
            <span className="font-medium uppercase">Pull</span>

            {(moderator || cleaner) && <span className="font-medium uppercase">Remove Pull</span>}
          </div>

          <ul>
            {pullRequests.map((pr, index) => (
              <li
                key={pr.url}
                className="grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b border-gray-2 py-4 lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr] sm:grid-cols-[170px_50px_100px]"
              >
                <span className="sm:hidden">{index + 1}</span>
                <p className="truncate font-medium">
                  {pr.status === 'DELETED' && (
                    <span className="font-bold" style={{ color: 'red' }}>
                      DELETED:{' '}
                    </span>
                  )}
                  {pr.title}
                </p>
                <p className="font-medium">
                  <a href={pr.url} target="_blank" rel="noreferrer">
                    <GitHubIcon className="h-[30px]" />
                  </a>
                </p>

                {(moderator || cleaner) && (
                  <p className="cursor-pointer truncate font-medium" onClick={removePr(pr.id)}>
                    {pr.status === 'DELETED' ? 'Return' : 'Remove'}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

MergedPrs.propTypes = {
  team: PropTypes.object,
};

export default MergedPrs;
