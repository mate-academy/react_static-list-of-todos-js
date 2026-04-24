import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => (
      <article
        className={`TodoInfo ${todo.completed === true ? 'TodoInfo--completed' : ''}`}
        key={todo.id}
      >
        <TodoInfo todo={todo} />
        <UserInfo todo={todo.user} />
      </article>
    ))}
  </>
);
