export const UserInfo = ({ user }) => (
  <div className="UserInfo" href={`mailto:${user.email}`}>
    <a href={`mailto:${user.email}`}>{user.name}</a>
  </div>
);
