import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const { title, user, completed } = todo;
  const isCompleted = completed ? 'TodoInfo--completed' : '';

  return (
    <>
      <article className={`TodoInfo ${isCompleted}`}>
        <h2 className="TodoInfo__title">{title}</h2>
        <UserInfo user={user} />
      </article>
    </>
  );
};
