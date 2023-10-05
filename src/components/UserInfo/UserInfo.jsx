export const UserInfo = ({ user }) => {
  const {
    name,
    email,
    id,
  } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`} key={id}>
      {name}
    </a>
  );
};
