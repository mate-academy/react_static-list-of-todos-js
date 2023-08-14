export const UserInfo = ({ user }) => {
  if (user.id) {
    return (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    );
  }

  return null;
};
