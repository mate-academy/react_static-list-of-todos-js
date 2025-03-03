import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(task => (
      <TodoInfo todo={task} key={task.id} />
    ))}
  </section>
);
