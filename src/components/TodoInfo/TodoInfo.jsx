import React from 'react';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <tr
      className={completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}
      data-cy="TodoInfo"
    >
      <td className="TodoInfo__title">{title}</td>
      <td>{user && <UserInfo user={user} />}</td>
    </tr>
  );
};
