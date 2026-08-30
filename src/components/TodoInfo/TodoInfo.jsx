import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo: { title, completed, user } }) => {
  const todoClassName = completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo';

  return (
    <article className={todoClassName}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
