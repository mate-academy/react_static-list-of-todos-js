// Add the required props
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoInfo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
