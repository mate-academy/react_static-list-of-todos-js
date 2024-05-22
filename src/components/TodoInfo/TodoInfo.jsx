import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { user } = todo;

  const userInfo = user ? <UserInfo user={user} /> : null;

  return (
    <article
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {userInfo}
    </article>
  );
};
