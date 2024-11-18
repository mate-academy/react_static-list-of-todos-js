import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  return (
    <article
      className={!todo.completed ? 'TodoInfo' : 'TodoInfo TodoInfo--completed'}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {!!todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
