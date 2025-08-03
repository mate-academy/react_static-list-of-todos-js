import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;

  const classNames = completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo';

  return (
    <article className={classNames}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
