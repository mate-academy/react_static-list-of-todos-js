// Add the required props
export const UserInfo = ({ todo }) => (
  <a className="UserInfo" href={`mailto: + ${todo.user.email}`}>
    {todo.user.username}
  </a>
);
