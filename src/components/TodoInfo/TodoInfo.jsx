import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

import users from '../../api/users.json';

export const TodoInfo = ({ todo }) => {
  const user = users.find(userFrom => userFrom.id === todo.userId);

  const className = todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={className}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={user} key={user.id} />
    </article>
  );
};
