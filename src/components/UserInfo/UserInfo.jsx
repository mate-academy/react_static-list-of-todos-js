export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={user && `mailto:${user.email}`}>
    {user && user.name}
  </a>
);
