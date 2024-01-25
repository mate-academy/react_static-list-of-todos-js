import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const articleClasses = todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';
  const userInfo = todo.user && <UserInfo user={todo.user} />;

  return (
    <article className={articleClasses}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {userInfo}
    </article>
  );
};
