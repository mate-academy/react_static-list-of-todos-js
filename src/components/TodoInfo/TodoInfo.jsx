import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo: { user, completed, title } }) => (
  <article
    className={classNames('TodoInfo', { 'TodoInfo--completed': completed })}
  >
    <h2 className="TodoInfo__title">{title}</h2>

    {user && <UserInfo user={user} />}
  </article>
);
