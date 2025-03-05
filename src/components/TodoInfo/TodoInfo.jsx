// Add the required props

import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed } = todo;

  return (
    <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo todo={todo.user} />
    </article>
  );
};
