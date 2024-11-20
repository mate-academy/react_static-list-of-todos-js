import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  return (
    <article
      className={
        todo.completed === true ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'
      }
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
