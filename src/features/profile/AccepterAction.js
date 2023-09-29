import { useParams } from 'react-router-dom';
import * as friendApi from '../../apis/friend-api';
import { STATUS_FRIEND, STATUS_UNKNOWN } from '../../config/constant';
import useAuth from '../../hooks/useAuth';

export default function AccepterAction({
  setProfileFriends,
  setStatusWithAuthUser
}) {
  const { userId } = useParams();
  const { authenticatedUser } = useAuth();

  const handleClickAccept = async () => {
    await friendApi.acceptFriend(userId);
    setStatusWithAuthUser(STATUS_FRIEND);
    setProfileFriends(oldFriends => [...oldFriends, authenticatedUser]);
  };

  const handleClickReject = async () => {
    await friendApi.deleteFriend(userId);
    setStatusWithAuthUser(STATUS_UNKNOWN);
  };
  return (
    <>
      <button className="btn btn-gray-200" onClick={handleClickAccept}>
        <i className="fa-solid fa-user-check" /> <span>Accept</span>
      </button>
      <button className="btn btn-gray-200 ms-3" onClick={handleClickReject}>
        <i className="fa-solid fa-user-xmark" /> <span>Reject</span>
      </button>
    </>
  );
}
