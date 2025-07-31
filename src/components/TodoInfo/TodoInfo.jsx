import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const { title, user, completed } = todo;

  return (
    <article
      className={completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {user !== undefined && <UserInfo user={user} key={user.id} />}
    </article>
  );
};
