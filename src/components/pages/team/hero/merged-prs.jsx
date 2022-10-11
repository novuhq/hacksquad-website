import useModerator from '~/helpers/use.moderator';

import GitHubIcon from '../../../../icons/github.inline.svg';

const MergedPRs = ({team}) => {
  const moderator = useModerator();

  const removePr = (id) => async () => {
    await fetch(`/api/remove-pr?id=${id}`);
    window.location.reload();
  };

  return (
    <>
      <h2 className="mt-20 font-mono text-lg font-bold uppercase leading-tight lg:text-[25px] md:text-[25px] xs:text-[25px]">
        {'>>'}Latest Merged Pull Requests
      </h2>

      <div className="md:scrollbar-hidden mx-auto mt-20 max-w-[1220px] bg-black md:max-w-none md:overflow-x-auto">
        <div className="mt-5 md:min-w-[1080px] md:px-7 sm:px-4">
          <div className="grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b border-gray-2 pb-4 lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr] sm:grid-cols-[70px_150px_230px_1fr]">
            <span className="font-medium uppercase">Place</span>
            <span className="font-medium uppercase">Name</span>
            <span className="font-medium uppercase">Pull</span>
            {moderator && <span className="font-medium uppercase">Remove Pull</span>}
          </div>
          <ul>
            {JSON.parse(team.prs || '[]').map((pr, index) => (
              <li
                key={pr.url}
                className="grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b border-gray-2 py-4 lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr] sm:grid-cols-[70px_150px_230px_1fr]"
              >
                <span>{index + 1}</span>
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
                {moderator && (
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

export default MergedPRs;
