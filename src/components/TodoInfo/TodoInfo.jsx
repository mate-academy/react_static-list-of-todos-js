import { UserInfo } from '../UserInfo/UserInfo';
// Add the required props
export const TodoInfo = ({ todo }) => (
  <article className="TodoInfo TodoInfo--completed">
    <h2
      className="TodoInfo__title"
      style={{
        color: !todo.completed && 'red',
      }}
    >
      {todo.title}
    </h2>
    {todo.user && <UserInfo user={todo.user} />}
  </article>
);
