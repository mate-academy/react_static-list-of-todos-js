import React from 'react';
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => todo.user && <TodoInfo key={todo.id} todo={todo} />)}
  </section>
);
