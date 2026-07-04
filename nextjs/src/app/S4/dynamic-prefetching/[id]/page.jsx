let fetchParams = async (id) => {
  let response = await fetch(`http://localhost:3001/posts/${id}`);
  return response.json();
};

let generateStaticParams = async () => {
  let response = await fetch("http://localhost:3001/posts");
  let data = await response.json();

  return data.map((item) => {
    return { id: item.id.toString() };
  });
};

generateStaticParams();

const dynamicPrefetching = async ({ params }) => {
  let { id } = await params;
  let posts = await fetchParams(id);
  return (
    <div>
      <h1>{posts.title}</h1>
    </div>
  );
};

export default dynamicPrefetching;
