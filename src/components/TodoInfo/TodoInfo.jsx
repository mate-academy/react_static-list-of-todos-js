import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo: { user, completed, title } }) => (
  <article className={`TodoInfo ${completed && 'TodoInfo--completed'}`}>
    <h2 className="TodoInfo__title">{title}</h2>

    {user && <UserInfo user={user} />}
  </article>
);
