import React from 'react';
import { UserInfo } from './UserInfo';

export const TodoInfo = ({ todo }) => (
  <div className={`TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`}>
    <h2>{todo.title}</h2>
    <p>
      <span>User ID: {todo.userId}</span>
      <br />
      <span>Status: {todo.completed ? 'Completed' : 'Not completed'}</span>
    </p>
    {todo.user && <UserInfo user={todo.user} />}
  </div>
);