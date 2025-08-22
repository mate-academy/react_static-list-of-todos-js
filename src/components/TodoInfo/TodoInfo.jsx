// src/components/TodoInfo/TodoInfo.jsx
import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo'; // Importe o componente UserInfo

export const TodoInfo = ({ todo }) => {
  const todoClasses = `TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`;

  return (
    <article className={todoClasses}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
