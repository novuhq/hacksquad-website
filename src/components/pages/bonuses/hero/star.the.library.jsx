import { usePlausible } from 'next-plausible';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import GitHubIcon from '../../../../icons/github.inline.svg';

const StarTheLibrary = ({ bonus, number, name, library, accepted }) => {
  const plausible = usePlausible();
  const [starred, setStarred] = useState(accepted);
  const test = useCallback(async () => {
    const data = await (
      await fetch('/api/github-star', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ library }),
      })
    ).json();

    if (data.finish) {
      plausible('star-the-library', { props: { library } });
      setStarred(true);
    } else {
      toast.error('No star found, please try to remove star and add again');
    }
  }, []);

  return (
    <li className="grid grid-cols-[20px_485px_230px_1fr] gap-x-5 border-b border-gray-2 py-4 lg:grid-cols-[20px_390px_1fr_1fr] md:grid-cols-[20px_485px_230px_1fr] sm:grid-cols-[100px_100px_120px]">
      <span className="sm:hidden">{number}</span>
      <span>
        <a
          href={`https://github.com/${library}`}
          className="cursor-pointer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex">
            <div>
              Give <strong>{name}</strong> a star{' '}
            </div>
            <div>
              <GitHubIcon className="ml-[10px] h-[20px] leading-[0]" />
            </div>
          </div>
          <br />
          (if you already gave a star, remove the star and star again)
        </a>
      </span>
      <span>{bonus || 5} points</span>
      <span>
        {starred ? (
          <span>Accepted</span>
        ) : (
          <a
            className="cta-btn-animation relative flex max-w-full cursor-pointer items-center justify-center leading-none"
            rel="noreferrer"
            onClick={test}
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
              <span className="text-lg sm:text-[18px]">Check</span>
            </div>
          </a>
        )}
      </span>
    </li>
  );
};

StarTheLibrary.propTypes = {
  bonus: PropTypes.number,
  number: PropTypes.number,
  name: PropTypes.string,
  library: PropTypes.string,
  accepted: PropTypes.bool,
};

export default StarTheLibrary;
