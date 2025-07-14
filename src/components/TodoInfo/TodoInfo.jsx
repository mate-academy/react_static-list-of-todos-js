import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ info, getUserById }) => (
  <article className="TodoInfo TodoInfo--completed">
    <h2 className="TodoInfo__title">{info.title}</h2>
    <UserInfo user={getUserById} />
  </article>
);
