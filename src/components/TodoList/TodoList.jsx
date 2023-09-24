import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  const result = todos.map(todo => (
    <TodoInfo todo={todo} />
  ));

  return result;
};
