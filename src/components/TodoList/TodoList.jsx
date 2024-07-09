import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => {
  return todos.map(todo => {
    return <TodoInfo key={todo.id} todo={todo} />;
  });
};
