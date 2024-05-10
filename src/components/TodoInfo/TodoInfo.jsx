import './_TodoInfo.scss';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const todoClasses = `TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`;

  return (
    <article className={todoClasses}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );
};

export default TodoInfo;
