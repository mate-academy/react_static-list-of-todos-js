import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  let articleClass = 'TodoInfo';

  if (todo.completed) {
    articleClass += ' TodoInfo--completed';
  }

  return (
    <article className={articleClass}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
