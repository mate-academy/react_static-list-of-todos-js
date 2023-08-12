// Add the required props

import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todoes }) => (
  <section className="TodoList">
    {todoes && todoes.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </section>
);
