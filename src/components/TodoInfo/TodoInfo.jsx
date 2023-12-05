import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => { 
  const cn = `TodoInfo ${todo.completed && "TodoInfo--completed"}`;
  return (
  <article className={cn}>
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <UserInfo user={todo.user} />
  </article>
)};
