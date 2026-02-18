import axios from "axios";

const ID = async ({ params }) => {
  const { id } = await params;
  let response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const post = await response.data;
  return (
    <>
      <div className="w-1/4 bg-blue-500 rounded-2xl mx-auto p-4 m-4 flex flex-col items-center justify-center gap-4">
        {/* <img
          src={post?.url}
          alt={post?.title}
          className="w-16 h-16 rounded-full"
        />
        <p>id : {id}</p>
        <p className="text-sm text-gray-700">InterCepting-{post?.title}</p> */}
        ID:{id}
      </div>
    </>
  );
};

export default ID;