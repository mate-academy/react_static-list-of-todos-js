// Add the required props
export const UserInfo = ({ user }) => {
  const mail = `mailto:${user.email}`
  return (
  <a className="UserInfo" href={mail}>
    {user.name}
  </a>
)};
