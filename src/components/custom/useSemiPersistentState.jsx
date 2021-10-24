import { useState, useEffect } from 'react';

const useSemiPersistentState = (key, initialValue) => {
  const [term, setTerm] = useState(localStorage.getItem(key) || initialValue);

  //anything that would change should be here
  useEffect(() => {
    localStorage.setItem(key, term);
  }, [key, term]);

  return [term, setTerm];
};

export default useSemiPersistentState;
