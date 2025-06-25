import React from 'react';
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <article key={todo.id}>
        <TodoInfo todo={todo} />
      </article>
    ))}
  </section>
);
