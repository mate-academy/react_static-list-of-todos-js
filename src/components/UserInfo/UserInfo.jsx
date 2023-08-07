export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={user.email}>
    {user.username}
  </a>
);
