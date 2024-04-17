import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  let todoInfoClassStatus = 'TodoInfo';
  const completed = '--completed';

  if (todo.completed) {
    todoInfoClassStatus += completed;
  }

  return (
    <article className={`TodoInfo ${todoInfoClassStatus}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} />
    </article>
  );
};
