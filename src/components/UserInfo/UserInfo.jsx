export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={user.email ? `mailto:${user.email}` : '#'}>
    {user.name}
  </a>
);
