import PropTypes from 'prop-types';
import React, { useState } from 'react';

const ProductHuntButton = ({ productHunt }) => {
  const [status] = useState(!!productHunt);
  // const [text, setText] = useState('');
  // const check = useCallback(async () => {
  //   const { data } = await axios.post('/api/product-hunt', { answer: text });
  //   if (data.finish) {
  //     setStatus(true);
  //   }
  // }, [text]);
  return <div className="flex">{status === true ? <>Accepted!</> : <>Sorry! You missed it</>}</div>;
};
ProductHuntButton.propTypes = {
  productHunt: PropTypes.object,
};
export default ProductHuntButton;
