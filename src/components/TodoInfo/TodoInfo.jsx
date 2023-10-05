import { UserInfo } from '../UserInfo';
import '../../App.scss';

export const TodoInfo = ({ todo }) => (
  <article className={`TodoInfo ${todo.completed && `TodoInfo--completed`}`}>
    <h2 className="TodoInfo__title">
      {`${todo.title}`}
    </h2>

    <UserInfo user={todo.user} />
  </article>
);
