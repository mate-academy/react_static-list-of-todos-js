import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo: { user, completed, title } }) => (
  <article
    className={`TodoInfo ${completed === true && 'TodoInfo--completed'}`}
  >
    <h2 className="TodoInfo__title">{title}</h2>

    <UserInfo user={user} />
  </article>
);
