
export const UserInfo = ({ user }) => {
  const email = user.email;
  const userName = user.name;

  return (
    <a
      className="UserInfo"
      href={`mailto:${email}`}>
      {userName}
    </a >
  )
};
