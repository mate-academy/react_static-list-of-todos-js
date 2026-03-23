// Add the required props
import React from 'react';

import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const className =
    `TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`.trim();

  return (
    <article className={className}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <p className="TodoInfo__id">#{todo.id}</p>

      {todo.user ? (
        <UserInfo user={todo.user} />
      ) : (
        <span className="UserInfo"> {todo.user?.username || 'No user'} </span>
      )}
    </article>
  );
};
