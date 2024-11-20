import React from 'react';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const todoClassName = `TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`;

  return (
    <article className={todoClassName}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
