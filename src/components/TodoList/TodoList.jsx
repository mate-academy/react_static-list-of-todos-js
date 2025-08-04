// Add the required props

import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(currentTodo => (
        <TodoInfo key={currentTodo.id} todo={currentTodo} />
      ))}
    </section>
  );
};
