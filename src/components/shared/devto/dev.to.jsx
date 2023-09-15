'use client';

import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const DevToAccount = () => {
  const [val, setValue] = useState('');
  const connectDevTo = useCallback(async (token) => {
    const data = await (
      await fetch('/api/dev-to', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
        method: 'POST',
      })
    ).json();

    if (data.finish) {
      window.location.reload();
      return;
    }

    toast.error('Invalid Token');
    setValue('');
  }, []);

  useEffect(() => {
    if (!val) return;
    connectDevTo(val);
  }, [val, connectDevTo]);

  return (
    <div style={{ position: 'relative' }}>
      {!!val && (
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            left: 0,
            top: 0,
          }}
        >
          <div style={{ position: 'relative', flex: 1 }}>
            <div
              style={{
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
              }}
            >
              <div className="h-7 w-7 animate-spin rounded-full border border-b border-transparent border-b-white" />
            </div>
          </div>
        </div>
      )}
      <input
        style={{ boxSizing: 'border-box', width: 200, height: 42, padding: '0 10px' }}
        placeholder="Paste Token Here"
        type="text"
        value={val}
        onPaste={(e) => {
          setValue(e.clipboardData.getData('Text'));
        }}
      />
    </div>
  );
};

export default DevToAccount;
