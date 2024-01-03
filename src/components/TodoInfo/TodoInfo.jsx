import cn from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { id, userId, completed, title, user } = todo;

  return (
    <>
      <article
        className={cn('TodoInfo', { 'TodoInfo--completed': completed })}
        key={id}
      >
        <h2 className="TodoInfo__title">{title}</h2>

        {user && <UserInfo user={user} key={userId} />}
      </article>
    </>
  );
};
