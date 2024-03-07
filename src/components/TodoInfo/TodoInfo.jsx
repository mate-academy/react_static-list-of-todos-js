import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

export function TodoInfo({ todo: { user, completed, title } }) {
  return (
    <article
      className={classNames('TodoInfo', { 'TodoInfo--completed': completed })}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
}
