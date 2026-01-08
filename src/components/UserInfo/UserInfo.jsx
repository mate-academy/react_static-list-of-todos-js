export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={user.mail}>
    {user.name}
  </a>
);
