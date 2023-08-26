// Add the required props
export const UserInfo = ({ user: { name, email } }) => (
  <a className="UserInfo" href={email}>
    {name}
  </a>
);
