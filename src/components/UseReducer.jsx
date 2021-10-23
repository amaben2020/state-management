import { useEffect, useReducer } from 'react';

const data = [
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

const storiesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    // case 'LOADING': {
    //   return {
    //     loading: true,
    //   };
    // }

    case 'SET_STORIES':
      return payload;

    default:
      throw new Error();
  }
};

const UseReducer = () => {
  const [story, dispatchStories] = useReducer(storiesReducer, []);

  useEffect(() => {
    //   dispatchStories({
    //     type: 'LOADING',
    //   });
    const getStories = () => {
      dispatchStories({
        type: 'SET_STORIES',
        payload: data,
      });
    };
    getStories();
  }, []);

  const handleRemoveStory = (id) => {
    const newStory = data.filter((d) => d.id !== id);
    dispatchStories({
      type: 'SET_STORIES',
      payload: newStory,
    });
  };

  return (
    <div>
      {story.map((s) => (
        <div>
          {' '}
          {s.name}
          <button onClick={() => handleRemoveStory(s.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UseReducer;
