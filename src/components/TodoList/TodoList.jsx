import { TodoInfo } from '../TodoInfo/TodoInfo';
import todosFromServer from '../../api/todos.json';

export const TodoList = () => (
  <>
    {todosFromServer.map(todo => (
      <TodoInfo
        title={todo.title}
        tusk={todo.completed}
        todosUserId={todo.userId}
      />
    ))}
  </>
);
