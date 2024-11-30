import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const completedStyle = todo.completed && 'TodoInfo--completed';

  return (
    <article className={`TodoInfo ${completedStyle}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} />
    </article>
  );
};
