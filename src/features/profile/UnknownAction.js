import { useParams } from 'react-router-dom';
import * as friendApi from '../../apis/friend-api';
import { STATUS_ACCEPTER } from '../../config/constant';

export default function UnknownAction({ setStatusWithAuthUser }) {
  const { userId } = useParams();
  const handleClickButton = async () => {
    await friendApi.addFriend(userId);
    setStatusWithAuthUser(STATUS_ACCEPTER);
  };
  return (
    <button className="btn btn-gray-200" onClick={handleClickButton}>
      <i className="fa-solid fa-user-plus" /> <span>Add Friend</span>
    </button>
  );
}
