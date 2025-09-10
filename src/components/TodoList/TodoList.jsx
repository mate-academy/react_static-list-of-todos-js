import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos, users }) => (
  <>
    {todos.map(todo => (
      <TodoInfo todos={todo} users={users} />
    ))}
  </>
);
