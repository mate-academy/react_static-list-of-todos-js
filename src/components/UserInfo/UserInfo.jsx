// Add the required props
export const UserInfo = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <a className="UserInfo" href={user.email}>
      {user.name}
    </a>
  );
};
