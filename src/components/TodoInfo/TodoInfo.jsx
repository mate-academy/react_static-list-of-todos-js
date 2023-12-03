import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { user, completed, title } = todo;
  const complet = completed ? 'TodoInfo--completed' : '';

  return (
    <article className={`TodoInfo ${complet}`}>
      <h2 className="TodoInfo__title">{title}</h2>
      <UserInfo user={user} />
    </article>
  );
};
