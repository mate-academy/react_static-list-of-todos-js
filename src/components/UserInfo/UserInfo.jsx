export const UserInfo = ({ user }) => {
  const { name, email } = user;

  return (
    user && (
      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    )
  );
};
