import React from 'react';
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  if (!todos || todos.length === 0) {
    return <div className="TodoList">No todos to display.</div>;
  }

  return (
    <section className="TodoList">
      {todos.map(({ id, ...todo }) => (
        <TodoInfo key={id} todo={todo} />
      ))}
    </section>
  );
};
