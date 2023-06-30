import classnames from 'classnames';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  const { title, user } = todo;
  const isCompleted = todo.completed ? 'TodoInfo--completed' : '';

  return (
    <article className={classnames(`TodoInfo ${isCompleted}`)}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </article>
  );
};
