// Add the required props
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </section>
);
