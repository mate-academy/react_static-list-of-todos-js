// Add the required props
export const UserInfo = ({ user }) => (
  <div>
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </div>
);
