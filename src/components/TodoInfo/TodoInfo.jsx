import './TodoInfo.scss';
import clsx from 'clsx';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <article className={clsx('TodoInfo', { 'TodoInfo--completed': completed })}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
