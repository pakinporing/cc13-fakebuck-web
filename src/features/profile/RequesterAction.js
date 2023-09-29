import { useParams } from 'react-router-dom';
import * as friendApi from '../../apis/friend-api';
import { STATUS_UNKNOWN } from '../../config/constant';

export default function RequesterAction({ setStatusWithAuthUser }) {
  const { userId } = useParams();
  const handleClickButton = async () => {
    await friendApi.deleteFriend(userId);
    setStatusWithAuthUser(STATUS_UNKNOWN);
  };
  return (
    <button className="btn btn-gray-200" onClick={handleClickButton}>
      <i className="fa-solid fa-user-xmark" /> <span>Cancel Request</span>
    </button>
  );
}
