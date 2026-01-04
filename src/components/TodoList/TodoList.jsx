import { todos } from '../../api/todos.json';
import { TodoInfo } from '../TodoInfo';

export const TodoList = () => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </section>
);
