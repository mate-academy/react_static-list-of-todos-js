import { UserInfo } from '../UserInfo';

// Add the required props
export function TodoInfo({ todo }) {
  const className = `TodoInfo ${todo.completed === true ? `TodoInfo--completed` : ''}`;

  return (
    <article className={className}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );
}
