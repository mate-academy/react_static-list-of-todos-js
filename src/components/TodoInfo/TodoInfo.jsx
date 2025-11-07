import '../../App.scss';
import { UserInfo } from '../UserInfo/UserInfo';

function completedClass({ todo }) {
  return todo.completed ? 'TodoInfo--completed' : '';
}

export const TodoInfo = ({ todo }) => (
  <article className={`TodoInfo ${completedClass({ todo })}`}>
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {todo.user && <UserInfo user={todo.user} />}
  </article>
);
