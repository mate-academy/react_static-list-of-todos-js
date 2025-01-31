// eslint-disable-next-line import/named
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <div className="toDosInfo">
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </div>
);
