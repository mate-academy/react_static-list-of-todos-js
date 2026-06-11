import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <article
      className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {/* Рендеримо UserInfo тільки якщо user існує */}
      {user && <UserInfo user={user} />}
    </article>
  );
};
