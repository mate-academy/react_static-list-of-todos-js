// Add the required props

import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { completed, title, user } = todo;

  const completedClass = completed ? ' TodoInfo--completed' : '';

  return (
    <article className={`TodoInfo${completedClass}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </article>
  );
};

export default TodoInfo;
