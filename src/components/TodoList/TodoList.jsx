import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo'; // Assumindo que exista este componente
// ou importe conforme sua estrutura

export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
