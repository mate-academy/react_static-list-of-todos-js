import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos: todos }) => {
  if (!Array.isArray(todos)) {
    return null;
  }

  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
