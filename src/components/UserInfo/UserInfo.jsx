export const UserInfo = ({ user }) => (
  <>
    {user.name && (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    )}
  </>
);
