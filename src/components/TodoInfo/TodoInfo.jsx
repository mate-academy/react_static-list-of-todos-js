import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = props => (
  <article
    className={`TodoInfo ${props.todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{props.todo.title}</h2>
    <UserInfo user={props.todo.user} />
  </article>
);
