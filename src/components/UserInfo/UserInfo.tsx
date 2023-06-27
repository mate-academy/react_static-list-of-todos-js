import { User } from '../../types/User';

// Add the required types and props
type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
