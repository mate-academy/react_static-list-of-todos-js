import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const articleClassNames = todo.completed ? (
    'TodoInfo TodoInfo--completed'
  ) : 'TodoInfo';

  return (
    <article className={articleClassNames}>
      <h2 className="TodoInfo__title">
        {todo.title}
      </h2>

      <UserInfo user={todo.user} />
    </article>
  );
};
