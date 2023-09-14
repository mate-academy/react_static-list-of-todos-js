import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo, user }) => (
  <article
    className={`TodoInfo ${
      todo.completed === true ? 'TodoInfo--completed' : ''
    } `}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {user && <UserInfo user={user} /> }

  </article>
);
