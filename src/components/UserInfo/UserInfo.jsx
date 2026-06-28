// Add the required props
// export const UserInfo = () => <>UserInfo markup</>;

export const UserInfo = ({ user }) => (
  <div className="UserInfo">
    {user.name}
    <a href={`mailto:${user.email}`}>{user.email}</a>
  </div>
);
