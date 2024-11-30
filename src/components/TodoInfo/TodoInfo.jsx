import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { id, completed, title, user } = todo;

  return (
    <article
      key={id}
      className={`TodoInfo ${completed && 'TodoInfo--completed'}`}
    >
      <h2 className="TodoInfo__title ">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
