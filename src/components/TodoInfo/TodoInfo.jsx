import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, user, completed } = todo;
  const articleClass = completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo';

  return (
    <li>
      <article className={articleClass}>
        <h2 className="TodoInfo__title">{title}</h2>

        <UserInfo user={user} />
      </article>
    </li>
  );
};
