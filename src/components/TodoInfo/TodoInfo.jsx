import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  return (
    <>
      <article
        className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}
      >
        <h2 className="TodoInfo__title">{todo.title}</h2>
        {todo.user && <UserInfo user={todo.user} key={todo.user.id} />}
      </article>
    </>
  );
};
