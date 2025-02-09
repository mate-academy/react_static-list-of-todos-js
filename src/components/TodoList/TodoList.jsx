import { TodoInfo } from '../TodoInfo';
import '../../App.scss';
// Add the required props
export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(e => (
      <TodoInfo todo={e} key={e.id} />
    ))}
  </section>
);
