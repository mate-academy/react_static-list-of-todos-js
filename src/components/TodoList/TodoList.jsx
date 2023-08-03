import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </>
);
