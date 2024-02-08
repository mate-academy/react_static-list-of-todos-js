import { UserInfo } from '../UserInfo';
import usersFromServer from '../../api/users.json';

const TodoInfo = ({ todo }) => {
  const person = usersFromServer.find(user => user.id === todo.userId);

  return (
    <article className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {person && <UserInfo user={person} />}
    </article>
  );
};

export { TodoInfo };
