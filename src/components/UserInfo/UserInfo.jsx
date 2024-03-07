// Add the required props
export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.user.email}`}>
    {user.user.name}
  </a>
);
