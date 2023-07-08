import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed } = todo;

  const articleClassName = `TodoInfo ${completed ? 'TodoInfo--completed' : ''}`;

  return (
    <article className={articleClassName}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={todo.user} />
    </article>
  );
};
