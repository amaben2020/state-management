import React from 'react';

const Input2 = ({ changer, term, handleSearchSubmit, submit }) => {
  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" onChange={changer} value={term} />
        <button type={submit} disabled={!term}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Input2;
