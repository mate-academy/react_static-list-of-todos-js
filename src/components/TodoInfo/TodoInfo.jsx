import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { completed, title, user } = todo;
  const isComplete = completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo';

  return (
    <article className={isComplete}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </article>
  );
};
