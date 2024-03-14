import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos, users }) => {
  return todos.map(todo => (
    <section className="TodoList">
      <TodoInfo key={todo.id} todo={todo} users={users} />
    </section>
  ));
};
