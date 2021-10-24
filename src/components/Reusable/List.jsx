import React from 'react';

const List = ({ s, handleRemoveStory }) => {
  console.log(s);
  return (
    <div key={s.id}>
      {' '}
      <p>{s.title}</p> by : {s.author}
      <button onClick={() => handleRemoveStory(s.id)}>Delete</button>
    </div>
  );
};

export default List;
