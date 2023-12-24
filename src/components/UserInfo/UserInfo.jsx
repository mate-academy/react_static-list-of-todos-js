// Add the required props
export const UserInfo = ({ user }) => {
  const userEmailLink = `mailto:${user.email}`;

  return (
    <>
      <a className="UserInfo" href={userEmailLink}>
        {user.name}
      </a>
    </>
  );
};
