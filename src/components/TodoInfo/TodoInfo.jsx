import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const { userId, completed, title, user } = todo;

  return (
    <article
      className={classNames('TodoInfo', {
        'TodoInfo--completed': completed,
      })}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      <UserInfo user={user} key={userId} />
    </article>
  );
};
