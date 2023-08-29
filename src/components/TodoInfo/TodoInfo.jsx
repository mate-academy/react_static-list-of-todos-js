import './TodoInfo.scss';
import { UserInfo } from '../UserInfo';
import cn from 'classnames';

export const TodoInfo = ({ todo }) => {
  const {
    title,
    completed,
    user,
  } = todo;

  return (
    <article
      className={
        cn('TodoInfo', {
          'TodoInfo--completed': completed,
        })
      }
    >
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {user && (
        <UserInfo key={user.id} user={user} />
      )}
    </article>
  );
};
