import cn from 'classnames';
import usersFromServer from '../../api/users.json';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const currentUser = usersFromServer.find(person => person.id === todo.userId);
  const articleClass = cn('TodoInfo', {
    'TodoInfo--completed': todo.completed,
  });

  return (
    <article className={articleClass}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={currentUser} />
    </article>
  );
};
