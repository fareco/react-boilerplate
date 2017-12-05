import React from 'react';

const NotMatch = ({ history }) => {
  const { goBack } = history;
  return (
    <div>
      <h1>404</h1>
      <button onClick={() => (goBack())}>go back</button>
    </div>
  );
};

export default NotMatch;
