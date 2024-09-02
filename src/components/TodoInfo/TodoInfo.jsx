// Add the required props
import React from 'react';
import UserInfo from '../UserInfo';

const TodoInfo = ({ todo, user }) => {
  const completedClass = todo.completed ? 'TodoInfo--completed' : '';

  return (
    <div className={`TodoInfo ${completedClass}`}>
      <h3>{todo.title}</h3>
      {user && <UserInfo user={user} />}
    </div>
  );
};

export default TodoInfo;
