// Add the required props
import cn from 'classnames';
import { UserInfo } from '../UserInfo';

import usersFromServer from '../../api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const TodoInfo = ({ todo }) => (
  <article
    className={cn('TodoInfo', {
      'TodoInfo--completed': todo.completed === true,
    })}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {todo.userId !== null && (
      <UserInfo
        user={getUserById(todo.userId)}
        key={getUserById(todo.userId).id}
      />
    )}
  </article>
);
