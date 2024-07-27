import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, user } = todo;

  return (
    <article className="TodoInfo">
      <h2 className="TodoInfo__title TodoInfo--completed">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
