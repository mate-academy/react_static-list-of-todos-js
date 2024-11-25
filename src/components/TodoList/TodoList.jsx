// Add the required props
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="Todolist">
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todos.id} />
    ))}
  </section>
);
