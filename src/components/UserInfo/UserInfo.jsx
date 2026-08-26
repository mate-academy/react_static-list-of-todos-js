export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`} title={user.email}>
    {user.name}
  </a>
);
