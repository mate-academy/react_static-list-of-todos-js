import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  // eslint-disable-next-line no-shadow
  const { user } = todo;

  return (
    <article className="TodoInfo TodoInfo--completed">
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {user && <UserInfo key={user.id} user={todo.user} />}
    </article>
  );
};
