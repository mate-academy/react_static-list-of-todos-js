import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({
  todo: { completed, title, user },
}) => (
  <article
    className={classNames(
      'TodoInfo',
      { 'TodoInfo--completed': completed },
    )}
  >
    <h2 className="TodoInfo__title">{title}</h2>

    {user && <UserInfo user={user} />}
  </article>
);
