import React from 'react';
import { TodoInfo } from '../TodoInfo'; // правильний шлях до компонента TodoInfo

export const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
