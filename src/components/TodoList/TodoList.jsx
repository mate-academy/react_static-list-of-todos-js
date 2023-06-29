import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <div className="TodoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </div>
);
