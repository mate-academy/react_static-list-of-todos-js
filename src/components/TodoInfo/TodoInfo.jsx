// Add the required props

import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo, user }) => (
  <article
    className={`TodoInfo 
        ${todo.completed === true ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={user && <UserInfo user={todo.user} />} />
  </article>
);
