import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const { completed, title, user } = todo;
  const todoClassName = completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo';

  return (
    <>
      <article className={todoClassName}>
        <h2 className="TodoInfo__title">{`${title}`}</h2>
        {Object.hasOwn(todo, 'user') ? <UserInfo user={user} /> : null}
      </article>
    </>
  );
};
