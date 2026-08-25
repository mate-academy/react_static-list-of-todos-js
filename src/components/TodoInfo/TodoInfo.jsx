// Add the required props
import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;

  const todoClassName = completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo';

  return (
    <article className={todoClassName}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
