import React from 'react';

const Input2 = ({ changer, term, handleSearchSubmit }) => {
  return (
    <>
      <input type="text" onChange={changer} value={term} />
      <button type="button" disabled={!term} onClick={handleSearchSubmit}>
        Submit
      </button>
    </>
  );
};

export default Input2;
