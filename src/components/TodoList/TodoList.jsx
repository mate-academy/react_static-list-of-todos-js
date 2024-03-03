import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => {
  return (
    <>
      {todos.map(todo => {
        return <TodoInfo todo={todo} key={todo.id} />;
      })}
    </>
  );
};
