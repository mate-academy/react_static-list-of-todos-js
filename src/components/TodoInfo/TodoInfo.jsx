// Add the required props
import { UserInfo } from '../UserInfo/UserInfo';

function completeTodo(completed) {
  if (completed) {
    return `TodoInfo--completed`;
  }

  return '';
}

export const TodoInfo = ({ todo }) => (
  <article className={`TodoInfo ${completeTodo(todo.completed)}`}>
    <h2 className="TodoInfo__title">{`${todo.title}`}</h2>
    <UserInfo user={todo.user} />
  </article>
);
