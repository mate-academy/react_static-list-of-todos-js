// Add the required props
// export const TodoList = () => <>TodoList markup</>;

import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
