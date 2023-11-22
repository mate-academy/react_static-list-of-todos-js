import { TodoInfo } from '../TodoInfo';
// Add the required props
export const TodoList = ({ todos }) => (
  todos.map(todo => (<TodoInfo todo={todo} />))
);
