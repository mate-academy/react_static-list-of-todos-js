import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const todoClass = `TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`;

  return (
    <article className={todoClass}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
