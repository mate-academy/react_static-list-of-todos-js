// Add the required props
export const UserInfo = ({ user }) => (
      <a className={user.name} href={ user.email }>
      {user.name}
    </a>
);
