import { UserInfo } from '../UserInfo';

// Add the required props
export function TodoInfo({ todo }) {
  const completedModifier = todo.completed ? ' TodoInfo--completed' : '';

  return (
    <article className={`TodoInfo${completedModifier}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );
}
