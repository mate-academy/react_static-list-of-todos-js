import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo: { completed, title, user } }) => (
  <article className={completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}>
    <h2 className="TodoInfo__title">{title}</h2>

    {user && <UserInfo user={user} />}
  </article>
);
