import React from 'react';
import clsx from 'clsx';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  if (!todo) return null;

  return (
    <article
      className={clsx('TodoInfo', {
        'TodoInfo--completed': todo.completed,
      })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} />
    </article>
  );
};
