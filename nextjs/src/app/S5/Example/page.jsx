import axios from "axios";
import Link from "next/link";

const Example = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/photos?_limit=5",
  );
  const data = await response?.data;
  return (
    <>
      <div className="w-1/2 bg-green-300 p-4 rounded-2xl mx-auto mt-2">
        <h1 className="text-2xl font-bold text-center">Example</h1>
        <div className="flex flex-row gap-4">
          {data &&
            data?.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="w-1/4 bg-green-100 p-2 rounded-lg flex flex-col items-center gap-2"
                >
                  <img
                    src={item?.url}
                    alt={item?.title}
                    className="w-16 h-16 rounded-full"
                  />
                  <Link href={`/S5/Example/${item?.id}`}>
                    <p className="text-sm text-gray-700">{item?.title}</p>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Example;
