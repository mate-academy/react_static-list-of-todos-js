import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed } = todo;
  const todoStyle = `TodoInfo${completed ? ' TodoInfo--completed' : ''}`;

  return (
    <article className={todoStyle}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={todo.user} />
    </article>
  );
};
