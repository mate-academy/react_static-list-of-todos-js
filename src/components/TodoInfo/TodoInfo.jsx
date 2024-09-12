// Add the required props
import React from 'react';

import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  return (
    <article
      className={`TodoInfo ${todo.completed === true ? 'TodoInfo--completed' : 'TodoInfo'}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} />
    </article>
  );
};
