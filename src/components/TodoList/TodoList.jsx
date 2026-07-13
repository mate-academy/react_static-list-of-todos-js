import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos, users }) => (
  <>
    {todos.map(todo => {
      const user = users?.find(u => u.id === todo.userId);

      return <TodoInfo key={todo.id} todo={todo} user={user} />;
    })}
  </>
);
