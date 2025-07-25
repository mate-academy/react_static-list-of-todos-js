// Add the required props
export const UserInfo = ({ user }) =>
  user !== undefined && (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
