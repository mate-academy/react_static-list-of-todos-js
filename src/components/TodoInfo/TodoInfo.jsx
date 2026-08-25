import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo = ({ todo }) => {
  function getClassOfTodo(status) {
    if (status) {
      return 'TodoInfo--completed';
    }

    return '';
  }

  return (
    <article className={`TodoInfo ${getClassOfTodo(todo.completed)}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} />
    </article>
  );
};
