const { Link } = require('gatsby');
const React = require('react');

function SinglePost({ post }) {
  return (
    <div>
      <Link to={`/blog/${post.title}`}>
        <h2>{post.title}</h2>
      </Link>
    </div>
  );
}

export default function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}
    </div>
  );
}
