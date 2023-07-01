import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo: { completed, title, id, user } }) => {
  const activeClass = classNames({
    TodoInfo: true,
    'TodoInfo--completed': completed,
  });

  return (
    <article className={activeClass}>
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo key={user.id} user={user} />}
    </article>
  );
};
