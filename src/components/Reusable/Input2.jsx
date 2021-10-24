import React from 'react';

const Input2 = ({ changer, term }) => {
  return <input type="text" onChange={changer} value={term} />;
};

export default Input2;
