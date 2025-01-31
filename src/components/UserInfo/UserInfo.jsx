export const UserInfo = ({ user }) => (
  <div className="UserInfo">
    <a href={`mailto:${user.email}`}>{user.name}</a>
  </div>
);
