import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const todoClasses = todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={todoClasses}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user !== null && <UserInfo user={todo.user} />}
    </article>
  );
};
