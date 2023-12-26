
export const UserInfo = ({ user }) => {
  const userEmail = `mailto:${user.email}`;

  return (
    <a className="UserInfo" href={userEmail}>
      {user.name}
    </a>
  );
};
