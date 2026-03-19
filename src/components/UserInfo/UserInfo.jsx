// Add the required props
export const UserInfo = ({ user }) => {
  if (!user) {
    return null;
  }

  const { name, email } = user;

  return (
    <div className="UserInfo" href={`mailto:${email}`}>
      <p className="UserInfo__name">{name}</p>
    </div>
  );
};
