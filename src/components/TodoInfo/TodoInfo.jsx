import classnames from 'classnames';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const { title, user, completed } = todo;

  return (
    <article className={
      classnames('TodoInfo', { 'TodoInfo--completed': completed })
      }
    >

      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
