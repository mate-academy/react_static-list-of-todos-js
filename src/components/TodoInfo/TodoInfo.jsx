import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const { title, user, userId } = todo;

  return (
    <article
      className={classNames('TodoInfo', {
        'TodoInfo--completed': todo.completed === true,
      })}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      <UserInfo user={user} key={userId} />
    </article>
  );
};
