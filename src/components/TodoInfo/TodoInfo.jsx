import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { completed, title, user } = todo;
  const todoStatus = completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo';

  return (
    <article className={todoStatus}>
      <h2 className="TodoInfo__title">{title}</h2>
      {todo.user ? <UserInfo user={user} /> : null}
    </article>
  );
};
