import Post from './Post';

export default function PostList({ posts, setPosts }) {
  console.log('Post list execute');
  return (
    <div className="d-flex flex-column gap-3">
      {posts.map(el => (
        <Post key={el.id} post={el} setPosts={setPosts} />
      ))}
    </div>
  );
}
