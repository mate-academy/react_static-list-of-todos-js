// Add the required props
export const UserInfo = ({ user }) => {
  if (!user) {
    return <span className="UserInfo">User not found</span>;
  }

  return (
    <a className="UserInfo" key={user.id} href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
