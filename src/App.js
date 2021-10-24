import { useState } from 'react';
import './App.css';
import AsynchronousUseReducer from './components/AsynchronousUseReducer';
import useSemiPersistentState from './components/custom/useSemiPersistentState';
import DataFetching from './components/DataFetching/DataFetching';
import UseReducer from './components/UseReducer';

function App() {
  //using array destructuring to get the return values from the custom hook
  const [term, setTerm] = useSemiPersistentState('mySearch', 'ant');
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${term}`
  );
  const onChangeHandler = (e) => {
    return setTerm(e.target.value);
  };
  const handleSearchSubmit = () => {
    setUrl(`https://hn.algolia.com/api/v1/search?query=${term}`);
  };

  console.log(url);
  return (
    <div className="App">
      <UseReducer
        changer={onChangeHandler}
        term={term}
        handleSearchSubmit={handleSearchSubmit}
        url={url}
      />
      {/* <AsynchronousUseReducer />
      <DataFetching /> */}
    </div>
  );
}

export default App;
