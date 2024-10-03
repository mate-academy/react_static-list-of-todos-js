// Add the required props
export const UserInfo = ({ user }) => {
  const { name: userName, email } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {userName}
    </a>
  );
};
