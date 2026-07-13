import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos = [] }) => (
  <>
    {todos.map(todo => {
      return <TodoInfo key={todo.id} todo={todo} />;
    })}
  </>
);
