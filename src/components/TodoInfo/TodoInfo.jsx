import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ title, user }) => (
  <article className="TodoInfo TodoInfo--completed">
    <h2 className="TodoInfo__title">{title}</h2>
    <UserInfo
      user={user}
    />
  </article>

);
