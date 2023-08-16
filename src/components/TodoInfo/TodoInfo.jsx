import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const { completed, title, user } = todo;

  return (
    <article
      className={completed ? 'TodoInfo TodoInfo--completed'
        : 'TodoInfo'}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </article>
  );
};
