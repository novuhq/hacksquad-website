import React from 'react';
import { renderToString } from 'react-dom/server';

const DevToToolTip = () => (
    <span
      data-tip={renderToString(
        <div style={{ padding: 30 }}>
          1. Head over to dev.to, click your profile on the top right
          <br />
          2. Click Settings
          <br />
          3. Go to the Extension tab
          <br />
          4. Scroll to the end
          <br />
          5. Generate an api key from "DEV Community 👩‍💻👨‍💻 API Keys"
          <br />
          6. Paste the generated API key into the input
          <br />
        </div>
      )}
      data-html
    >
      Connect dev.to account{' '}
      <span
        style={{
          width: 20,
          fontSize: 12,
          display: 'inline-block',
          height: 20,
          textAlign: 'center',
          borderRadius: '100%',
          border: '1px solid white',
        }}
      >
        i
      </span>
    </span>
  );

export default DevToToolTip;
