import React, { useEffect, useReducer } from 'react';
import Input2 from './Reusable/Input2';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const storiesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INITIAL_FETCH':
      return {
        ...state,
        loading: true,
      };
    case 'SET_STORIES':
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };

    case 'REMOVE_STORY':
      return {
        ...state,
        loading: false,
        error: false,
        data: state.data.filter((elem) => elem.id !== payload),
      };

    default:
      throw new Error();
  }
};

const UseReducer = ({ changer, term, handleSearchSubmit, url }) => {
  const API_ENDPOINT = url;
  const [story, dispatchStories] = useReducer(storiesReducer, initialState);

  //using useCallback for memoization
  const loadStories = React.useCallback(async () => {
    if (term === '') return;
    dispatchStories({ type: 'INITIAL_FETCH' });
    const value = await axios.get(API_ENDPOINT);
    dispatchStories({ type: 'SET_STORIES', payload: value.data.hits });
  }, [API_ENDPOINT, term]);

  useEffect(() => {
    loadStories();
  }, [loadStories]);

  const handleRemoveStory = (id) => {
    return dispatchStories({ type: 'REMOVE_STORY', payload: id });
  };

  return (
    <div>
      {story.loading && <p style={{ color: 'red' }}> Loading...</p>}{' '}
      <>
        {story.data.map((s) => (
          <div key={s.id}>
            {' '}
            <p>{s.title}</p> by : {s.author}
            <button onClick={() => handleRemoveStory(s.id)}>Delete</button>
          </div>
        ))}
        <Input2
          term={term}
          changer={changer}
          handleSearchSubmit={handleSearchSubmit}
        />
      </>
    </div>
  );
};

export default UseReducer;
