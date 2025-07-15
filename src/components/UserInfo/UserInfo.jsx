// Add the required props
function UserInformation(user) {
  const userEmail = `mailto:${user.email}`;

  return (
    <a className="UserInfo" href={userEmail}>
      {user.name}
    </a>
  );
}

export const UserInfo = ({ user }) => UserInformation(user);
