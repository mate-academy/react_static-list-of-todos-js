import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(element => (
      <TodoInfo todo={element} key={element.id} />
    ))}
  </section>
);
