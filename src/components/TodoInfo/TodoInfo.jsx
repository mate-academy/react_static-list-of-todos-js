import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const completedClass = todo.completed ? 'TodoInfo--completed' : '';

  return (
    <div className={`TodoInfo ${completedClass}`}>
      <p className="TodoInfo__title">{todo.title}</p>
      {todo.user && <UserInfo user={todo.user} />}
    </div>
  );
};

export default TodoInfo;
