// import React from 'react';

// //just extract the most important logic and export it
// //The return value must be an array
// const useSemiPersistentState = (key, initialState) => {
//   // eslint-disable-next-line no-use-before-define
//   const [value, setValue] = React.useState(
//     localStorage.getItem(key) || initialState
//   );

//   React.useEffect(() => {
//     localStorage.setItem(key, value);
//   }, [value, key]);

//   return [value, setValue];
// };

// export default useSemiPersistentState;

import { useState, useEffect } from 'react';

const useSemiPersistentState = () => {
  const [value, setValue] = useState(' ');

  useEffect();
  return <div></div>;
};

export default useSemiPersistentState;
