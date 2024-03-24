import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
// export const TodoInfo = ({ todo }) => (
//   <article className="todo-info TodoInfo--completed">
//     <h2 className="todo-info__title">{todo.title}</h2>
//     <UserInfo user={todo.user} />
//   </article>
// );
export const TodoInfo = ({ todo }) => (
  <article
    className={`TodoInfo ${todo.completed === true ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {todo.user && <UserInfo user={todo.user} />}
  </article>
);
