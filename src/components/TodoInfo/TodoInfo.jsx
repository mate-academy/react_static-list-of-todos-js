import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const innerClass = `TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`;

  return (
    <article className={innerClass}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );
};
