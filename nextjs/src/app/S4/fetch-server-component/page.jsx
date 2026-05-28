
import ServerAction from "./ServerAction";

const getPosts = async () => {
  // cach

  // let response = await fetch("https://fakestoreapi.com/products", {
  //   cache: "no-store",
  // });

  //revalidate

  let response = await fetch("http://localhost:3001/posts", {
    next: { revalidate: 20 },
    cache: "no-store",
  });
  if (response.ok) {
    return response.json();
  }
};
const fetchServerComponent = async () => {
  const posts = await getPosts();

  return (
    <>
      <div className="w-1/2 rounded-2xl p-4 bg-blue-300 mx-auto">
        {posts?.map((post) => {
          return (
            <div key={post.id}>
              <h1>{post.title}</h1>
            </div>
          );
        })}
        <ServerAction />
      </div>
    </>
  );
};

export default fetchServerComponent;
