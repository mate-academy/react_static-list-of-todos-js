// Add the required props
export const UserInfo = ({ user }) =>
  user !== null && (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
