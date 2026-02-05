import { TodoInfo } from '../TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => {
  return (
    <>
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </>
  );
};
