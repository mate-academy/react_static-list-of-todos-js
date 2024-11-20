export const UserInfo = props => (
  <a className="UserInfo" href={`mailto:${props.user.email}`}>
    {props.user.name}
  </a>
);
