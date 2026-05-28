const Posts = async () => {
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return posts;
  };

  const posts = await fetchPosts();

  return (
    <>
      {posts?.slice(0, 10).map((post) => (
        <div
          key={post.id}
          className="border-2 border-black w-1/2 my-5 p-5 rounded-lg"
        >
          <h2 className="font-bold text-lg">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;
