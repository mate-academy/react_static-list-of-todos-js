import { TodoInfo } from '../TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(item => (
      <TodoInfo todo={item} key={item.id} />
    ))}
  </section>
);
