import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => (
  <>
    <section className="TodoList">
      {todos.map(todo => (
        <>
          <TodoInfo key={todo.id} todo={todo} user={todo.user} />
        </>
      ))}
    </section>
  </>
);
