import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo: { user, title, completed } }) => {
  const isCompleted = completed ? 'TodoInfo--completed' : '';

  return (
    <>
      <article className={`TodoInfo ${isCompleted}`}>
        <h2 className="TodoInfo__title">{title}</h2>
        {user && <UserInfo user={user} />}
      </article>
    </>
  );
};
