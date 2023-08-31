import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { completed, title, user } = todo;

  return (
    <article className={classNames('TodoInfo',
      { 'TodoInfo--completed': completed })}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {todo.user && <UserInfo user={user} /> }
    </article>
  );
};
