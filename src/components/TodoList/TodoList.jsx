import React from 'react';
import { TodoInfo } from '../TodoInfo';

export function TodoList({ todos }) {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
