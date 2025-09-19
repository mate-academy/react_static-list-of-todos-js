// Add the required props

import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => {
  return todos.map(todo => {
    return <TodoInfo todo={todo} key={todo.id} />;
  });
};
