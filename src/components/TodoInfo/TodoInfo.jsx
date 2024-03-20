import React from 'react';

export function TodoInfo({ todo }) {
  return (
    <div className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
      <h3 className="TodoInfo__title">{todo.title}</h3>
      <div className="UserInfo">{todo.user.name}</div>
    </div>
  );
}
