import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

const ProductHuntButton = ({ productHunt }) => {
  const [status, setStatus] = useState(!!productHunt);
  const [text, setText] = useState('');
  const check = useCallback(async () => {
    const { data } = await axios.post('/api/product-hunt', { answer: text });
    if (data.finish) {
      setStatus(true);
    }
  }, [text]);
  return (
    <div className="flex">
      {status === true ? (
        <>Accepted!</>
      ) : (
        <>
          <input
            value={text}
            placeholder="Your answer"
            className="h-11 w-[150px] px-1"
            onChange={(e) => setText(e.target.value.toUpperCase())}
          />
          <button className="h-11 bg-white px-2 text-black" onClick={check}>
            Submit
          </button>
        </>
      )}
    </div>
  );
};
ProductHuntButton.propTypes = {
  productHunt: PropTypes.object,
};
export default ProductHuntButton;
