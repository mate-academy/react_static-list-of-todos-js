// Add the required props
import './TodoList.scss';
import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <article key={todo.id} className="TodoList__item">
        <TodoInfo todo={todo} />
      </article>
    ))}
  </section>
);
