// Add the required props
import classnames from 'classnames';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

// export const TodoInfo = ({ todo }) => (
//   <article className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
//     <h2 className="TodoInfo__title">
//       {todo.title}
//     </h2>
//     <UserInfo user={todo.user} />
//   </article>
// );
export const TodoInfo = ({ todo }) => (
  <article
    className={classnames('TodoInfo', {
      'TodoInfo--completed': todo.completed,
    })}
  >
    <h2 className="TodoInfo__title">
      {todo.title}
    </h2>
    <UserInfo user={todo.user} />
  </article>
);
