import React from 'react';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  if (!todo) {
    return null;
  }

  const isCompleted = todo.completed;
  const { title, user } = todo;

  return (
    <article className={`TodoInfo ${isCompleted ? 'TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
