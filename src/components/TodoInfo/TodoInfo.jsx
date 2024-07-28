// Add the required props
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => (
  <article className={`TodoInfo ${todo.complited && 'TodoInfo--completed'}`}>
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo.user} key={todo.id} />
  </article>
);
