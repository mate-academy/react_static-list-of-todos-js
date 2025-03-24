// Add the required props

export const UserInfo = ({ user }) => {
  return (
    <div className="UserInfo">
      <p className="UserInfo__name">
        {user.name}
      </p>
      <p className="UserInfo__email">
        {user.email}
      </p>
    </div>
  );
};