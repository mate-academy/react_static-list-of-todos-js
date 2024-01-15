import React from 'react';
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  if (!todos) {
    return <></>;
  }

  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
