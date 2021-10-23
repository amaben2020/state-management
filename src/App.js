import React from 'react';
import './App.css';
import AsynchronousUseReducer from './components/AsynchronousUseReducer';
import useSemiPersistentState from './components/custom/useSemiPersistentState';
import UseReducer from './components/UseReducer';

function App() {
  const [term, setTerm] = useSemiPersistentState('search' || 'ant');

  const onChangeHandler = (e) => {
    return setTerm(e.target.value);
  };
  return (
    <div className="App">
      <UseReducer changer={onChangeHandler} term={term} />
      <AsynchronousUseReducer />
    </div>
  );
}

export default App;
