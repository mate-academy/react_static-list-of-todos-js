// Add the required props
export const UserInfo = ({ todo }) => (
  <a className="UserInfo" href={todo.user.email}>
    {todo.user.username}
  </a>
);
