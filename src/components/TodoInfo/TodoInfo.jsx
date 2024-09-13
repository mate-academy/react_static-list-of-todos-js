import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ todo: { completed, title, user } }) => {
  const todoClassName = completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo';

  return (
    <article className={todoClassName}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </article>
  );
};
