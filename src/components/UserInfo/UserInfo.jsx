export const UserInfo = ({ user }) => {
  if (user) {
    return (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    );
  }

  return null;
};
