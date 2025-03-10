import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const addClass = todo.completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo';

  return (
    <article className={addClass}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
