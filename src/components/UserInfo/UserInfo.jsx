export const UserInfo = ({ user }) => {
  if (!user) return null;

  return (
    <div className="UserInfo" data-cy="UserInfo">
      <div className="UserInfo__name" data-cy="UserName">
        {user.name}
      </div>
      <div className="UserInfo__email" data-cy="UserEmail">
        {user.email}
      </div>
    </div>
  );
};
