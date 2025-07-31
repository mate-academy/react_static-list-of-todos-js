import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => (
  <div
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    data-cy="TodoInfo"
  >
    <h2 className="TodoInfo__title" data-cy="TodoTitle">
      {todo.title}
    </h2>

    {todo.user && <UserInfo user={todo.user} />}
  </div>
);
