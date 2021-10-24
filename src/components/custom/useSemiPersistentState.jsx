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

// import { useState, useEffect } from 'react';

// const useSemiPersistentState = (localStorageKey, initialState) => {
//   const [value, setValue] = useState(
//     localStorage.getItem(localStorageKey) || initialState
//   );

//   const lsSetter = () => {
//     return localStorage.setItem(localStorageKey, value);
//   };

//   useEffect(() => {
//     lsSetter();
//   }, [localStorageKey, value]);

//   return [value, setValue];
// };

// export default useSemiPersistentState;

import { useState, useEffect } from 'react';

const useSemiPersistentState = (key, initialValue) => {
  console.log(initialValue);
  const [term, setTerm] = useState(localStorage.getItem(key) || initialValue);

  //anything that would change should be here
  useEffect(() => {
    localStorage.setItem(key, term);
  }, [key, term]);

  return [term, setTerm];
};

export default useSemiPersistentState;
