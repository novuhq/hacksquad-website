'use client';

import clsx from 'clsx';
import PropTypes from 'prop-types';

import TwitterIcon from 'svgs/x-com.inline.svg';

const objectToGetParams = (object) => {
  const params = Object.entries(object)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);

  return params.length > 0 ? `?${params.join('&')}` : '';
};

const getBoxPositionOnWindowCenter = (width, height) => ({
  left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2,
  top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2,
});

const windowOpen = (url, { width, height, ...configRest }) => {
  const config = {
    width,
    height,
    location: 'no',
    toolbar: 'no',
    status: 'no',
    directories: 'no',
    menubar: 'no',
    scrollbars: 'yes',
    resizable: 'no',
    centerscreen: 'yes',
    chrome: 'yes',
    ...configRest,
  };

  return window.open(
    url,
    '',
    Object.keys(config)
      .map((key) => `${key}=${config[key]}`)
      .join(', ')
  );
};

const TwitterShareButton = ({
  url,
  shareText,
  children = null,
  className: additionalClassName = null,
}) => {
  const handleTwitterShare = (event) => {
    const link = `https://twitter.com/intent/tweet${objectToGetParams({
      url,
      text: shareText,
    })}`;

    const windowConfig = {
      width: 550,
      height: 400,
      ...getBoxPositionOnWindowCenter(550, 400),
    };

    event.preventDefault();

    windowOpen(link, windowConfig);
  };

  return (
    <button
      className={clsx('relative', additionalClassName)}
      type="button"
      onClick={handleTwitterShare}
    >
      <span>{children}</span>
      <TwitterIcon className="h-5 shrink-0 xs:h-4" />
    </button>
  );
};

TwitterShareButton.propTypes = {
  shareText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default TwitterShareButton;
