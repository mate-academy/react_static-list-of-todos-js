import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const todoCompleted = todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={todoCompleted}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
