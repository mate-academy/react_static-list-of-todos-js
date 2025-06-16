// Add the required props
import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <article
      className={classNames('TodoInfo', { 'TodoInfo--completed': completed })}
    >
      <span className="TodoInfo__title">{title}</span>

      {user && <UserInfo user={user} />}
    </article>
  );
};
