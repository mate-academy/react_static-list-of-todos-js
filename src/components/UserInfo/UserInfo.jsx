// Add the required props
export const UserInfo = ({ user }) => {
  if (!user || !user.name || !user.email) {
    return <p className="UserInfo__error">Invalid user data</p>;
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};

