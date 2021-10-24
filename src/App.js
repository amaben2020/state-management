import React from 'react';
import './App.css';
import AsynchronousUseReducer from './components/AsynchronousUseReducer';
import useSemiPersistentState from './components/custom/useSemiPersistentState';
import DataFetching from './components/DataFetching/DataFetching';
import UseReducer from './components/UseReducer';

function App() {
  //using array destructuring to get the return values from the custom hook
  const [term, setTerm] = useSemiPersistentState('mySearch', 'ant');

  const onChangeHandler = (e) => {
    return setTerm(e.target.value);
  };
  return (
    <div className="App">
      <UseReducer changer={onChangeHandler} term={term} />
      <AsynchronousUseReducer />
      <DataFetching />
    </div>
  );
}

export default App;
