import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { user } = todo;

  return (
    <article
      className={
        todo.completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'
      }
    >
      <UserInfo user={user} />
      <h2 className="TodoInfo__title">{todo.title}</h2>

    </article>
  );
};
