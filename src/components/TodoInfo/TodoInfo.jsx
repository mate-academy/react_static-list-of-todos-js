// Add the required props
import { UserInfo } from '../UserInfo';
import usersFromServer from '../../api/users.json';

function getUserById(userId) {
  return <UserInfo user={usersFromServer.find(user => user.id === userId)} />
      || null;
}

export const TodoInfo = ({ todo }) => (

  <article className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}>
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {getUserById(todo.userId)}
  </article>
);

// TodoInfo--completed
