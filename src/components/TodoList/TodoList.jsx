import React from 'react';
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  const { id } = todos;

  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo
          key={id}
          todo={todo}
        />
      ))}
    </section>
  );
};
