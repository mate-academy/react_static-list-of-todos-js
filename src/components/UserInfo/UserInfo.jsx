// Add the required props
export const UserInfo = ({ user }) => (
  <>
    <div className="UserInfo" href={`mailto:${user.email}`}>{user.name}</div>
  </>

);
