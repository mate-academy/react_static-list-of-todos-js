// Add the required props
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  let info = 'TodoInfo';

  if (todo.completed === true) {
    info += ' TodoInfo--completed';
  }

  const user = { ...todo.user };

  return (
    <article className={info}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={user} key={user.id} />
    </article>
  );
};
