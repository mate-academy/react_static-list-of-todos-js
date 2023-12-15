import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const { completed, title, user } = todo;
  const isCompleted = completed === true ? '--completed' : '';

  return (
    <>
      <article className={`TodoInfo TodoInfo${isCompleted}`}>
        <h2 className="TodoInfo__title">{title}</h2>

        <UserInfo user={user} />
      </article>
    </>
  );
};
