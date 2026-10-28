import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <div className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
      <p className="TodoInfo__title">{title}</p>
      {user && <UserInfo user={user} />}
    </div>
  );
};

export default TodoInfo;