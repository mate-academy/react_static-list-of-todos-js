import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const completed = todo.completed ? ' TodoInfo--completed' : '';

  return (
    <article className={`TodoInfo${completed}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );
};
