import coverImage from '../assets/cover-image.jpg';

export default function CoverImage({ src }) {
  return (
    <img
      src={src || coverImage}
      alt="cover"
      className="img-fluid position-absolute top-50 start-50 translate-middle"
    />
  );
}
