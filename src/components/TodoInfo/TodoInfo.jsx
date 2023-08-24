import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { user, completed, title } = todo;
  const articleClass = completed ? 'TodoInfo--completed' : '';

  return (
    <article className={`TodoInfo ${articleClass}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user ? (
        <UserInfo user={user} key={user.id} />
      ) : ('')}
    </article>
  );
};
