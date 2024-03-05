// Add the required props

import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo: { completed, title, user } }) => (
  <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">{title}</h2>

    {user && <UserInfo user={user} />}
  </article>
);
