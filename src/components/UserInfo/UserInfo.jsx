// Add the required props
export const UserInfo = ({ user }) => (
  <>
    {user.id > 0 && (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    )}
  </>

);
