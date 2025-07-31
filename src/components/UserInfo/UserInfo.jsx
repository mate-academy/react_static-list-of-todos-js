export const UserInfo = ({ user }) => {
  return (
    <div className="UserInfo">
      <h2 className="UserInfo__name">{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};
