import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  // console.log(todos);
  const { title, user } = todo;

  return (
    <article className="TodoInfo">
      {/* <p>{todos.title}</p> */}
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
