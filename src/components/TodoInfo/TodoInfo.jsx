import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { completed, user, title } = todo;

  const isCompleted = classNames('TodoInfo', {
    'TodoInfo--completed': completed,
  });

  return (
    <article className={isCompleted}>
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
