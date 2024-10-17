import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const completedClass = todo.completed ? 'TodoInfo--completed' : '';

  return (
    <article className={`TodoInfo ${completedClass}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};

export default TodoInfo;
