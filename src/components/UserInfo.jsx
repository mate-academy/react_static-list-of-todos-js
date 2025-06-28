export const UserInfo = ({ user }) => (
  <div className="UserInfo">
    <a href={`mailto:${user.email}`}>
      {user.name} ({user.email})
    </a>
  </div>
);
