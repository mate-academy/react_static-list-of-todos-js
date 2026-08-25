import { TodoInfo } from '../TodoInfo';

const AddTodos = todos =>
  todos.map(todo => <TodoInfo todo={todo} key={todo.id} />);

// Add the required props
export const TodoList = ({ todos }) => (
  <section className="TodoList">{AddTodos(todos)}</section>
);
