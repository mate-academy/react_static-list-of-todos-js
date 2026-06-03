import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoInfo todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};
