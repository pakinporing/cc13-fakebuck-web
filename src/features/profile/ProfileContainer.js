import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { STATUS_ME } from '../../config/constant';
import ProfileCover from './ProfileCover';
import ProfilePanel from './ProfilePanel';
import * as userApi from '../../apis/user-api';

export default function ProfileContainer() {
  const [profileUser, setProfileUser] = useState({});
  const [profileFriends, setProfileFriends] = useState([]);
  const [statusWithAuthUser, setStatusWithAuthUser] = useState(STATUS_ME);

  const { userId } = useParams();

  useEffect(() => {
    const fetchProfileUser = async () => {
      const res = await userApi.getProfileUser(userId);
      setProfileUser(res.data.user);
      setProfileFriends(res.data.friends);
      setStatusWithAuthUser(res.data.statusWithAuthUser);
    };
    fetchProfileUser();
  }, [userId]);

  const updateProfileUser = value => {
    setProfileUser({ ...profileUser, ...value });
  };

  return (
    <div
      className="shadow-sm pb-2"
      style={{ backgroundImage: 'linear-gradient(#f0f2f5, #fff)' }}
    >
      <ProfileCover coverImage={profileUser.coverImage} />
      <ProfilePanel
        profileUser={profileUser}
        profileFriends={profileFriends}
        statusWithAuthUser={statusWithAuthUser}
        updateProfileUser={updateProfileUser}
        setProfileFriends={setProfileFriends}
        setStatusWithAuthUser={setStatusWithAuthUser}
      />
    </div>
  );
}
