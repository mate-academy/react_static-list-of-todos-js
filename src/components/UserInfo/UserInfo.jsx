// Add the required props
export const UserInfo = ({ user }) => (

  <a className="UserInfo" href={user.email}>
    {user.name}
  </a>
);
