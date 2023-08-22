// Add the required props
export const UserInfo = ({ userName, userEmail }) => (
  <>
    <a className="UserInfo" href={`mailto:${userEmail}`}>
      {userName}
    </a>
  </>
);
