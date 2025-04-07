import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => {
      return <TodoInfo key={todo.id} todo={todo} />;
    })}
  </>
);
