export const UserInfo = ({ user }) => {
  const email = `mailto:${user.email}`;

  return (
    <>
      {user && (
        <a className="UserInfo" href={email}>
          {user.name}
        </a>
      )}
    </>
  );
};
