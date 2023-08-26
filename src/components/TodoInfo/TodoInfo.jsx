import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { completed, title, user } = todo;

  // Визначте класи для елемента ul
  const ulClassName = classNames('TodoInfo', {
    'TodoInfo--completed': completed,
  });

  // Визначте класи для елемента li
  const liClassName = classNames('TodoInfo__title', {
    'TodoInfo__title--completed': completed,
  });

  return (
    <article className={ulClassName}>
      <h2 className={liClassName}>{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
