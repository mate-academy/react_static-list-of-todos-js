import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const isComplete = todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={isComplete}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user ? <UserInfo user={todo.user} /> : null}
    </article>
  );
};
