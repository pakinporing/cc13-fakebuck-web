import Avatar from '../components/Avatar';
import useAuth from '../hooks/useAuth';

export default function DropdownToggle({ onClick }) {
  const {
    authenticatedUser: { profileImage }
  } = useAuth();
  return (
    <div onClick={onClick}>
      <Avatar src={profileImage} size="40" />
    </div>
  );
}
