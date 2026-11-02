import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => {
      return <TodoInfo todo={todo} key={todo.id} />;
    })}
  </>
);
