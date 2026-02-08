// Add the required props
import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const user = todo.user || { name: todo.author, email: todo.email };
  const completedClass = todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <div className={completedClass}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={user} />}
    </div>
  );
};
