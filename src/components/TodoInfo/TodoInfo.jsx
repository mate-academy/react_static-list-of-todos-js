import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const { completed, title, user } = todo;

  function classNameTodo(params) {
    if (params) {
      return 'TodoInfo--completed';
    }

    return null;
  }

  return (
    <>
      <article className={`TodoInfo ${classNameTodo(completed)}`}>
        <h2 className="TodoInfo__title">{`${title}`}</h2>
        {user && <UserInfo user={user} />}
      </article>
    </>
  );
};
