import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
function TodoInformation(todo) {
  let articleClassName;
  // const userEmail = `mailto:${user.email}`;

  if (todo.completed) {
    articleClassName = 'TodoInfo TodoInfo--completed';
  } else {
    articleClassName = 'TodoInfo';
  }

  return (
    <article className={articleClassName}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={{ ...todo.user }} />
    </article>
  );
}

export const TodoInfo = ({ todo }) => TodoInformation(todo);
