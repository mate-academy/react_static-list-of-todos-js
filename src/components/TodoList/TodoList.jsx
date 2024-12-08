/* eslint-disable */

import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => {
  console.log(todos);

  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo todo={todo} />
      ))}
    </section>
  );
};
