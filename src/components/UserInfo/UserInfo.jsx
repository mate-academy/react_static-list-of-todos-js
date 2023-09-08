export const UserInfo = ({ user }) => {
  const { email, name } = user;

  return (
    <>
      {user.length !== 0 ? (
        <a className="UserInfo" href={`mailto:${email}`}>
          {name}
        </a>
      ) : (
        ''
      )}
    </>
  );
};
