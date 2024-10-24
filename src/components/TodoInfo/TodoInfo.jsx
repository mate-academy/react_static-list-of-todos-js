import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { completed, title } = todo;

  const isCompleted = completed ? 'TodoInfo--completed' : '';

  return (
    <article className={`TodoInfo ${isCompleted}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={todo.user} />
    </article>
  );
};
