// Add the required props
import { TodoInfo } from '../TodoInfo/TodoInfo';
export const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <div key={todo.id}>
          <TodoInfo todo={todo} />
        </div>
      ))}
    </div>
  );
};