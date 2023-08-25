import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const { user, title, completed } = todo;

  return (
    <article className={classNames(`TodoInfo`, { 'TodoInfo--completed': completed })}>
      <h2 className="TodoInfo__title">
        {title}
      </h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
