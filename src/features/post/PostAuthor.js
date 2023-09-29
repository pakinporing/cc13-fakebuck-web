import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import { timeSince } from '../../utils/date-format';

export default function PostAuthor({
  post: {
    User: { id, firstName, lastName, profileImage },
    createdAt
  }
}) {
  return (
    <div className="d-flex align-items-center gap-2">
      <div>
        <Link to={`/profile/${id}`}>
          <Avatar size="40" src={profileImage} />
        </Link>
      </div>
      <div className="d-flex flex-column">
        <Link
          to={`/profile/${id}`}
          className="text-dark fw-bold no-underline hover-underline text-3.5"
        >
          {firstName} {lastName}
        </Link>
        <small className="text-muted text-3">{timeSince(createdAt)}</small>
      </div>
    </div>
  );
}
