import Avatar from '../../components/Avatar';
import AvatarGroup from '../../components/AvatarGroup';

export default function ProfileInfo({
  profileUser: { profileImage, firstName, lastName },
  profileFriends
}) {
  return (
    <>
      <div className="-mt-20 -mt-md-10 z-10">
        <Avatar
          src={profileImage}
          size="168"
          borderSize="4"
          borderColor="white"
        />
      </div>
      <div className="my-3 flex-grow-1 d-flex flex-column align-items-center d-md-block">
        <h2 className="fw-bold mb-0">
          {firstName} {lastName}
        </h2>
        {profileFriends.length !== 0 && (
          <span className="d-inline-block text-muted py-1">
            {profileFriends.length} Friend{profileFriends.length > 1 ? 's' : ''}
          </span>
        )}
        <AvatarGroup
          max="8"
          data={profileFriends}
          size="32"
          borderColor="white"
          borderSize="2"
        />
      </div>
    </>
  );
}
