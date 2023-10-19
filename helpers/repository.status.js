import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState } from 'react';

const statuses = [
  {
    name: 'Not Determined',
    id: 'NOT_DETERMINED',
  },
  {
    name: 'Accepted',
    id: 'ACCEPTED',
  },
  {
    name: 'Denied',
    id: 'DENIED',
  },
  {
    name: 'Banned',
    id: 'BANNED',
  },
];

const RepositoryStatus = (props) => {
  const { url, displayOnly } = props;

  const urlMemo = useMemo(() => {
    const regex = /([^\/]+)\/([^\/]+)/;
    const match = url.match(regex);

    if (match) {
      return `/${match[1]}/${match[2]}`;
    } 
      return null;
    
  }, [url]);

  const [statusValue, setStatus] = useState('NOT_DETERMINED');
  useEffect(() => {
    repositories();
  }, []);

  const repositories = useCallback(async () => {
    const { status: newStatus } = await (
      await fetch(`/api/repository?id=https://github.com${urlMemo}`)
    ).json();
    setStatus(newStatus);
  }, []);

  const changeStatus = useCallback(async (status) => {
    await fetch(`/api/change-repository-status`, {
      body: JSON.stringify({
        url: `https://github.com${urlMemo}`,
        status,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
  }, []);

  if (displayOnly) {
    return statusValue;
  }

  return (
    <select
      onChange={(p) => {
        setStatus(p.target.value);
        changeStatus(p.target.value);
      }}
    >
      {statuses.map((status) => (
        <option selected={status.id === statusValue} key={status.id} value={status.id}>
          {status.name}
        </option>
      ))}
    </select>
  );
};

RepositoryStatus.propTypes = {
  url: PropTypes.string,
  displayOnly: PropTypes.bool,
};

export default RepositoryStatus;
