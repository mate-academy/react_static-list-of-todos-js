import { TodoInfo } from '../TodoInfo';
import {} from '../../App';

export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">
      {[...todos].map(todo => (
        <TodoInfo todo={todo} key={todo.id} />
      ))}
    </section>
  );
};
