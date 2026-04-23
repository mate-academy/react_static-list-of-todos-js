import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;
  const classNameTodo = `TodoInfo ${completed ? 'TodoInfo--completed' : ''}`;

  return (
    <article className={classNameTodo}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
