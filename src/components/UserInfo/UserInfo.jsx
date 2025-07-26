export const UserInfo = ({ user }) => (
  <a href={`mailto:${user.email}`} className="UserInfo">
    {user.name}
  </a>
);
