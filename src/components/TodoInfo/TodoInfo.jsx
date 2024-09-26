import { UserInfo } from '../UserInfo/UserInfo';
import users from '../../api/users.json';

export const TodoInfo = ({ todo }) => {
  let className = 'TodoInfo';
  const todosUser = users.find(user => user.id === todo.userId);

  if (todo.completed) {
    className += ' TodoInfo--completed';
  }

  return (
    <article className={className}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todosUser && <UserInfo user={todosUser} />}
    </article>
  );
};
