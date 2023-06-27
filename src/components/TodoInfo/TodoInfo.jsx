import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const {
    completed,
    title,
    user,
  } = todo;

  return (
    <article className={classNames('TodoInfo', {
      'TodoInfo--completed': completed === true,
    })}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {user && (
        <UserInfo user={user} />
      )}
    </article>
  );
};
