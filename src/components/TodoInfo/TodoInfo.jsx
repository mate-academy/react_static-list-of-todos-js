import { UserInfo } from '../UserInfo/index';

export const TodoInfo = ({ todo }) => {
  return (
    <article
      className={todo.completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}
    >
      {/* {console.log(todo)} */}

      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
