import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  function getClassName() {
    if (todo.completed === true) {
      return 'TodoInfo--completed';
    }

    return ' ';
  }

  return (
    <article className={`TodoInfo ${getClassName(todo)}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );
};
