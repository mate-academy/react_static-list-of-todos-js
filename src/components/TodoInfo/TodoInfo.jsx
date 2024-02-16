import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo, user }) => (
  <article className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <UserInfo
      user={todo.user}
    />
  </article>
);
