import useAuth from '../../hooks/useAuth';
import * as postApi from '../../apis/post-api';

export default function PostAction({ post: { Likes, id }, setPosts }) {
  const { authenticatedUser } = useAuth();
  const isUserLiked = Likes.find(el => el.userId === authenticatedUser.id);

  const handleClickLikeButton = async () => {
    if (isUserLiked) {
      await postApi.unlike(id);
      setPosts(previousPosts => {
        const deepClone = structuredClone(previousPosts);
        const idx = deepClone.findIndex(el => el.id === id);
        deepClone[idx].Likes = deepClone[idx].Likes.filter(
          el => el.userId !== authenticatedUser.id
        );
        return deepClone;
      });
    } else {
      const res = await postApi.createLike(id);
      setPosts(previousPosts => {
        const deepClone = structuredClone(previousPosts);
        const idx = deepClone.findIndex(el => el.id === id);
        deepClone[idx].Likes.push(res.data.like);
        return deepClone;
      });
    }
  };

  return (
    <div className="d-flex gap-1 py-1">
      <button
        onClick={handleClickLikeButton}
        className={`btn ${
          isUserLiked ? 'text-primary' : 'text-muted'
        } flex-1 d-flex align-items-center justify-content-center gap-2 hover-bg-gray-200`}
      >
        <i className="fa-regular fa-thumbs-up" />
        <small className="fw-bold">Like</small>
      </button>
      <button className="btn text-muted flex-1 d-flex align-items-center justify-content-center gap-2 hover-bg-gray-200">
        <i className="fa-regular fa-message" />
        <small className="fw-bold">Comment</small>
      </button>
    </div>
  );
}
