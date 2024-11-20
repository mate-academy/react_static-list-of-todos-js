export const UserInfo = ({ user }) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </>
);
