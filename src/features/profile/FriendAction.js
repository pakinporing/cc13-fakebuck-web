import { useParams } from 'react-router-dom';
import * as friendApi from '../../apis/friend-api';
import { STATUS_UNKNOWN } from '../../config/constant';
import useAuth from '../../hooks/useAuth';

export default function FriendAction({
  setProfileFriends,
  setStatusWithAuthUser
}) {
  const { userId } = useParams();
  const {
    authenticatedUser: { id }
  } = useAuth();
  const handleClickButton = async () => {
    await friendApi.deleteFriend(userId);
    setStatusWithAuthUser(STATUS_UNKNOWN);
    setProfileFriends(oldFriends => oldFriends.filter(el => el.id !== id));
  };
  return (
    <button className="btn btn-gray-200" onClick={handleClickButton}>
      <i className="fa-solid fa-user-xmark" /> <span>Unfriend</span>
    </button>
  );
}
