export default function PostResponse({ post: { Comments, Likes } }) {
  return (
    <div className="d-flex tw-py-2.5">
      {Likes.length > 0 && (
        <div className="d-flex align-items-center flex-grow-1 space-x-1.5">
          <div className="rounded-circle bg-primary position-relative w-4.5 h-4.5">
            <i className="fa-solid fa-thumbs-up position-absolute top-50 start-50 translate-middle text-white text-2.5" />
          </div>
          <small className="text-muted">{Likes.length}</small>
        </div>
      )}
      {Comments.length > 0 && (
        <small className="text-muted hover-underline" role="button">
          {Comments.length} Comments
        </small>
      )}
    </div>
  );
}
