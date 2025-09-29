export const UserInfo = ({ user }) => (
  <div className="UserInfo">
    <h3>{user.name}</h3>
    <p>
      <span>Email: {user.email}</span>
      <br />
      <span>Phone: {user.phone}</span>
    </p>
  </div>
);