import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const modifier = todo.completed ? ' TodoInfo--completed' : '';
  const className = `TodoInfo${modifier}`;

  return (
    <article className={className}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
