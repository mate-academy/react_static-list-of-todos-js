import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ list, getUserById }) => (
  <section className="TodoList">
    {list.map(l => (
      <TodoInfo info={l} key={l.id} getUserById={getUserById} />
    ))}
  </section>
);
