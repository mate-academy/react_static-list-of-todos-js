import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo: { completed, title, user } }) => {
  const isCompleted = completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={isCompleted}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
