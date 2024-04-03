import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const todoCopmlited = todo.completed ? 'TodoInfo--completed' : '';

  return (
    <article className={`TodoInfo ${todoCopmlited}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </article>
  );
};
