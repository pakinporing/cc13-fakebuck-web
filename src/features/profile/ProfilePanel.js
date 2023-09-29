import ProfileAction from './ProfileAction';
import ProfileInfo from './ProfileInfo';

export default function ProfilePanel({
  profileUser,
  profileFriends,
  statusWithAuthUser,
  updateProfileUser,
  setProfileFriends,
  setStatusWithAuthUser
}) {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center align-items-md-stretch mx-auto px-3 space-x-4 max-w-266">
      <ProfileInfo profileUser={profileUser} profileFriends={profileFriends} />
      <ProfileAction
        statusWithAuthUser={statusWithAuthUser}
        updateProfileUser={updateProfileUser}
        setProfileFriends={setProfileFriends}
        setStatusWithAuthUser={setStatusWithAuthUser}
      />
    </div>
  );
}
