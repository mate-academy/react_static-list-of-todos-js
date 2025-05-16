import React from 'react';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => (
  <div className={`TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <p className="TodoInfo__id">ID: {todo.id}</p>
    {todo.user && <UserInfo user={todo.user} />}
  </div>
);
