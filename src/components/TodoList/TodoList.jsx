// Add the required props
import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) =>
  todos.map(todo => {
    return (
      <div>
        <TodoInfo todo={todo} key={todo.id} />
      </div>
    );
  });
