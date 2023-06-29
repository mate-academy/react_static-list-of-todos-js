import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo: { completed, title, id, user } }) => (
  <article className={`TodoInfo ${completed && 'TodoInfo--completed'}`}>
    <h2 className="TodoInfo__title">{title}</h2>
    {user && <UserInfo key={user.id} user={user} />}
  </article>
);
