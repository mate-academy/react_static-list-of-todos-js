// Add the required props
export const UserInfo = ({ user }) => user.id && (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
