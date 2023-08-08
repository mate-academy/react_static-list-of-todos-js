import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({
  todo: {
    completed,
    title,
    user,
  },
}) => (
  <>
    <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {user && <UserInfo user={user} />}
    </article>
  </>
);
