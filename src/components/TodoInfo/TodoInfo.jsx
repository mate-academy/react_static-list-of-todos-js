import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ toDo }) => {
  const className = `TodoInfo${toDo.completed
    ? ' TodoInfo--completed' : ''}`;

  return (
    <article className={className}>
      <h2 className="TodoInfo__title">{toDo.title}</h2>

      {toDo.user
        ? (<UserInfo user={toDo.user} />)
        : null}
    </article>
  );
};
