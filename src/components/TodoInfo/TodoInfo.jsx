import cn from 'classnames';

import { UserInfo } from '../UserInfo';

const TodoInfo = ({ todo }) => {
  const { title, user } = todo;

  return (
    <article
      className={cn('TodoInfo', {
        'TodoInfo--completed': todo.completed,
      })}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};

export { TodoInfo };
