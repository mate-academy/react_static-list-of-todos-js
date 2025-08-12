// Add the required props
export const UserInfo = ({ user }) => {
  return (
    <a className="UserInfo"
      href={user.email ? `mailto:${user.email}` : '#'}
      title={user.name} >
      {user.name}
    </a>
  );
}
