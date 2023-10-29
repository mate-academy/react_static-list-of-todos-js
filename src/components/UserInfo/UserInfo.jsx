// Add the required props
function checkUser(user) {
  if (user !== undefined) {
    return `${user}`;
  }

  return '';
}

export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={checkUser(user.email)}>
    {checkUser(user.name)}
  </a>
);
