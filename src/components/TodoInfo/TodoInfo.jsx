import classNames from 'classnames';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, user, completed } = todo;
  const isCompleted = classNames({ 'TodoInfo--completed': completed });

  return (
    <article className={`TodoInfo ${isCompleted}`}>
      <h2 className="TodoInfo__title">{title}</h2>
      {Boolean(user) && (
        <UserInfo user={user} />
      )}
    </article>
  );
};
