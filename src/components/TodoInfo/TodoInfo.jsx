import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo, user }) => {
  const currentUser = user || todo.user;

  return (
    <article
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {currentUser && <UserInfo user={currentUser} />}
    </article>
  );
};
