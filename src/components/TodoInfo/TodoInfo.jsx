import { UserInfo } from '../UserInfo/UserInfo';
import users from '../../api/users.json';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const { userId, completed, title } = todo;
  const user = users.find(elem => (elem.id === userId ? elem : ''));

  return (
    <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">{title}</h2>
      <UserInfo user={user} />
    </article>
  );
};
