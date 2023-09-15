'use client';

import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';

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
  const { url } = props;
  const [statusValue, setStatus] = useState('NOT_DETERMINED');

  useEffect(() => {
    repositories();
  }, []);

  const repositories = useCallback(async () => {
    const { status: newStatus } = await (
      await fetch(`/api/repository?id=https://github.com${url}`)
    ).json();
    setStatus(newStatus);
  }, []);

  const changeStatus = useCallback(async (status) => {
    await fetch(`/api/change-repository-status`, {
      body: JSON.stringify({
        url: `https://github.com${url}`,
        status,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
  }, []);

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
};

export default RepositoryStatus;
