"use client";
import { useRouter, useSearchParams } from "next/navigation";

const SearchParamButton = () => {
  const router = useRouter();
  const SearchParam = useSearchParams(); 

  const name = SearchParam.get("name");
  const family = SearchParam.get("family");
  const age = SearchParam.get("age");

  return (
    <>
      <button
        className="bg-blue-300 rounded-2xl p-3 cursor-pointer"
        onClick={() => router.push("/S1?name=erfan&family=ahmadi&age=18")}
      >
        useSearchParam
      </button>

      <h2>{name +" "+ family} = {age}</h2>
    </>
  );
};

export default SearchParamButton;
