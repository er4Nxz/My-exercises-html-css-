const fetchPosts = async (id) => {
  let response = await fetch(`http://localhost:3001/posts/${id}`);
  return response.json();
};

const generateStaticParams = async () => {
  let response = await fetch("http://localhost:3001/posts");
  const posts = await response.json();

  return posts.map((item) => {
    return { id: item.id.toString() };
  });
};
generateStaticParams();

const ParamId = async ({ params }) => {
  const { id } = await params;
  const posts = await fetchPosts(id);
  return (
    <div>
      <h1>{posts.title}</h1>
    </div>
  );
};

export default ParamId;
