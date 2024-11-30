import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos }) =>
  todos.map(todo => (
    <section key={todo.id} className="TodoList">
      <TodoInfo todo={todo} />
    </section>
  ));
