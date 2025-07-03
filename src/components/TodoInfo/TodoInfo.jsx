import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo, user }) => {
  return (
    <div className={`TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`}>
      <p className="TodoInfo__title">{todo.title}</p>
      <UserInfo user={user} />
    </div>
  );
};
