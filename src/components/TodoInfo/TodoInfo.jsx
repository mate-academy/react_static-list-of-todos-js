// Add the required props
import React from 'react';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  return (
    <div className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
      <h3 className="TodoInfo__title">{todo.title}</h3>
      <UserInfo user={todo.user} />
    </div>
  );
};
