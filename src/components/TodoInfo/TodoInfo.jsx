// Add the required props
import UserInfo from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const todoInfoClass = todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={todoInfoClass}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};

export default TodoInfo;
