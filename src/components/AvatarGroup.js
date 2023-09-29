import { Link } from 'react-router-dom';
import Avatar from './Avatar';

export default function AvatarGroup({
  max,
  data,
  size,
  borderSize,
  borderColor
}) {
  return (
    <div>
      {data.slice(0, max).map((el, idx) => (
        <Link to={`/profile/${el.id}`} key={el.id}>
          <span className={idx > 0 ? '-ms-2' : ''}>
            <Avatar
              src={el.profileImage}
              size={size}
              borderColor={borderColor}
              borderSize={borderSize}
            />
          </span>
        </Link>
      ))}
    </div>
  );
}
