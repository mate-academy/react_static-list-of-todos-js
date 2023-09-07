import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo
        todo={todo}
        key={todo.id}
      />
    ))}
  </section>
);
