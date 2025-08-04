import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const { title, user } = todo;

  let className = 'TodoInfo';

  if (todo.completed) {
    className += ' TodoInfo--completed';
  }

  return (
    <article className={className}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
