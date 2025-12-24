export const UserInfo = ({ user }) => (
  <div className="UserInfo">
    <span className="UserInfo__name">{user.name}</span>
    <a href={`mailto:${user.email}`}>{user.email}</a>
  </div>
);
