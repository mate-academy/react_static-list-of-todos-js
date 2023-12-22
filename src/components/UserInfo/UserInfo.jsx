export const UserInfo = ({ user }) => {
  const mailLink = `mailto:${user.email}`;

  return (
    <a className="UserInfo" href={mailLink}>
      {user.name}
    </a>
  );
};
