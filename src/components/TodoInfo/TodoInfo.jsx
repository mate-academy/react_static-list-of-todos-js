import { UserInfo } from '../UserInfo';

export const TodoInfo = ({
  completed,
  title,
  user,
}) => (
  <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">
      {title}
    </h2>
    {user && <UserInfo user={user} />}
  </article>
);
