import { Post } from "./post/post";

export function Posts(props) {
  return (
    <div className="profile_posts">
      <div className="profile_add_post">
        <textarea placeholder="What's on your mind?"></textarea>
        <button>Add post</button>
      </div>
      <div className="all_posts">
        {props.posts.map((post) => (
          <Post name={post.name} text={post.text} key={post.id} />
        ))}
      </div>
    </div>
  );
}
