export const UserInfo = ({ user }) => {
  const { email, name } = user;

  return (
    <>
      {user && (
        <a className="UserInfo" href={`mailto:${email}`}>
          {name}
        </a>
      )}
    </>
  );
};
