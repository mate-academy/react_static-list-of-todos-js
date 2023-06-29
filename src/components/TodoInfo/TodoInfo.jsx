import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const {
    completed,
    title,
    user,
  } = todo;

  const classes = `TodoInfo ${completed ? 'TodoInfo--completed' : ''}`;

  return (
    <article className={classes}>
      <h2 className="TodoInfo__title">{title}</h2>
      <UserInfo user={user} />
    </article>
  );
};
