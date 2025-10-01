import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  // eslint-disable-next-line prefer-destructuring
  const user = todo.user;

  return (
    <article
      className={todo.completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
