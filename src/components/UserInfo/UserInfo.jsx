export const UserInfo = props => {
  const {
    user: { email, name },
  } = props;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
