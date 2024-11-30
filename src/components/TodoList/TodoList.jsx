import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => (
  <>
    <section className="TodoList">
      {todos.map(todo => (
        <div key={todo.id}>
          <TodoInfo todo={todo} />
        </div>
      ))}
    </section>
  </>
);
