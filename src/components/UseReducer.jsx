import { useEffect, useReducer } from 'react';

const Idata = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    phone: '1-463-123-4447',
    website: 'ramiro.info',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    phone: '493-170-9623 x156',
    website: 'kale.biz',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    phone: '(254)954-1289',
    website: 'demarco.info',
  },
];

const getAsyncStories = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ data: { Idata } }), 2000)
  );

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const storiesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
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

const UseReducer = ({ changer, term }) => {
  const [story, dispatchStories] = useReducer(storiesReducer, initialState);
  console.log('STORY', story.data);

  const loadStories = async () => {
    const value = await getAsyncStories();
    dispatchStories({ type: 'SET_STORIES', payload: value.data.Idata });
  };

  useEffect(() => {
    loadStories();
  }, []);

  const handleRemoveStory = (id) => {
    return dispatchStories({ type: 'REMOVE_STORY', payload: id });
  };

  const filteredData = () => {
    const val = story.data;

    const filtered = val.filter((element) =>
      element.username.toLowerCase().includes(term.toLowerCase())
    );
    return filtered;
  };

  return (
    <div>
      {story.loading && <p className="text-danger"> Loading...</p>}{' '}
      <>
        {filteredData().map((s) => (
          <div key={s.id}>
            {' '}
            {s.name}
            <button onClick={() => handleRemoveStory(s.id)}>Delete</button>
          </div>
        ))}
        <input type="text" onChange={changer} value={term} />
      </>
    </div>
  );
};

export default UseReducer;
