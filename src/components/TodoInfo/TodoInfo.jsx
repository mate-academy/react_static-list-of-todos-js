import React from 'react';
import { UserInfo } from '../UserInfo'; // Шлях до компонента UserInfo

export const TodoInfo = ({ todo }) => {
  return (
    <div className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
      <h3 className="TodoInfo__title">{todo.title}</h3>
      {todo.user && <UserInfo user={todo.user} />}
    </div>
  );
};
