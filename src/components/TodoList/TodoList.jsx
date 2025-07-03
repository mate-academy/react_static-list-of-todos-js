import React from 'react';
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos, users }) => {
  if (!todos?.length) {
    return null; // або <></>
  }

  return (
    <ul>
      {todos.map(todo => {
        const user = users.find(u => u.id === todo.userId);

        return <TodoInfo key={todo.id} todo={todo} user={user} />;
      })}
    </ul>
  );
};
