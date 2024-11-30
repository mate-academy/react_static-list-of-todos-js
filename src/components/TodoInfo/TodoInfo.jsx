import { UserInfo } from '../UserInfo/UserInfo';
import usersFromServer from '../../api/users.json';

export const TodoInfo = ({ todo }) => {
  return (
    <article
      className={`${todo.completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {usersFromServer
        .filter(user => todo.userId === user.id)
        .map(user => (
          <UserInfo key={user.id} user={user} />
        ))}
    </article>
  );
};
