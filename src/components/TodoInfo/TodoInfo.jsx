import { UserInfo } from '../UserInfo';

export function TodoInfo({ todo }) {
  const toDoComplete = todo.completed
    ? 'TodoInfo TodoInfo--completed' : 'TodoInfo';

  return (
    <article className={toDoComplete}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} />
    </article>
  );
}
