export const UserInfo = ({ user }) => {
  const emailTo = `mailto:${user.email}`;

  return (
    <a className="UserInfo" href={emailTo}>
      {user.name}
    </a>
  );
};
