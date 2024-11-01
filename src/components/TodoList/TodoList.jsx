import { TodoInfo } from '../TodoInfo/TodoInfo';
import '../../App.scss';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </section>
);

export default TodoList;
