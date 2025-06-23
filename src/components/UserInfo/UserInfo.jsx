// Add the required props
export const UserInfo = ({ user }) => {
  return (
    <div className="UserInfo">
      {user.name} {user.email}
      <a className="UserInfo-email" href={`mailto:${user.email}`}>
        {user.email}
      </a>
    </div>
  );
};
