import { TodoInfo } from '../TodoInfo/TodoInfo';
import todosFromServer from '../../api/todos.json';

export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo todo={todo} key={todo.id} />
      ))}
    </section>
  );
};
