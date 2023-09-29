import profileImage from '../assets/blank.png';

export default function Avatar({ src, size, borderSize, borderColor }) {
  const classes = `${borderSize ? 'border border-' + borderSize : ''} ${
    borderColor ? 'border-' + borderColor : ''
  }`;

  return (
    <img
      src={src || profileImage}
      className={`rounded-circle cursor-pointer ${classes}`}
      alt="user"
      width={size}
      height={size}
    />
  );
}
