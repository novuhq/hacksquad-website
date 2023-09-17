import { useCallback, useState } from 'react';

const CreateASquad = () => {
  const [name, setName] = useState('');
  const create = useCallback(async () => {
    await fetch('/api/create-team', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name,
      }),
    });

    window.location.reload();
  }, [name]);
  return (
    <div style={{ color: 'black' }}>
      <input
        type="text"
        name="squad"
        placeholder="Squad Name"
        value={name}
        style={{ color: 'white', height: 50, padding: '0 10px', width: '100%' }}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        disabled={name.length < 2}
        style={{
          cursor: name.length < 2 ? 'not-allowed' : 'pointer',
          width: '100%',
          padding: 10,
          border: '1px solid black',
          marginTop: 20,
        }}
        onClick={create}
      >
        Create a squad
      </button>
    </div>
  );
};

export default CreateASquad;
