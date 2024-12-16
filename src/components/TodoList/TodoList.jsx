// eslint-disable-next-line import/no-cycle

import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  if (todos.length === 0) {
    return null;
  }

  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo todo={todo} />
      ))}
    </section>
  );
};
