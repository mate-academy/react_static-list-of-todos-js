import React from 'react';
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <li key={todo.id} className="TodoList__item">
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
