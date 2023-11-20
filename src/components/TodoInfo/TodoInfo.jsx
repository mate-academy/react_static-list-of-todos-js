import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, user, completed } = todo;
  const ifCompleted = completed ? 'TodoInfo--completed' : '';

  return (
    <>
      <article className={`TodoInfo ${ifCompleted}`}>
        <h2 className="TodoInfo__title">{title}</h2>

        {user !== undefined
          ? (
            <UserInfo user={user} />
          )
          : <></>}
      </article>
    </>
  );
};
