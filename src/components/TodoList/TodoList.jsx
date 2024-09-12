import React from 'react';
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  if (todos.length === 0) {
    return '';
    // eslint-disable-next-line no-else-return
  }

  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
