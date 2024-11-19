import { TodoInfo } from '../TodoInfo';
// Add the required props
export const TodoList = ({ todos }) => {
  const todolist = Array.isArray(todos)
    ? todos.map(todo => (
        <TodoInfo todo={todo} key={todo.id} />
        // eslint-disable-next-line indent
      ))
    : null;

  return <section className="TodoList">{todolist}</section>;
};
