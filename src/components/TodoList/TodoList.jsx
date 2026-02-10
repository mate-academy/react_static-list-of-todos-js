import React from 'react';
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  return (
    <table className="table is-fullwidth is-striped" data-cy="TodoList">
      <thead>
        <tr>
          <th>Title</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <TodoInfo key={todo.id} todo={todo} />
        ))}
      </tbody>
    </table>
  );
};
