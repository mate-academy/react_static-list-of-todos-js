import cn from 'classnames';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo';
import usersFromServer from '../../api/users.json';

export const TodoInfo = ({ todo }) => {
  const {
    userId,
    completed,
    title,
  } = todo;
  const user = usersFromServer.find(userItem => (
    userItem.id === userId
  ));

  return (
    <article className={cn('TodoInfo', {
      'TodoInfo--completed': completed,
    })}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </article>
  );
};
