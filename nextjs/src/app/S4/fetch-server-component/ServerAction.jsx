"use client";

import addPost from "./addPost";
import SubmitBtn from "./SubmitBtn";
import { useActionState } from "react";

const ServerAction = () => {
  const [state, formHandle] = useActionState(addPost, {});
  

  return (
    <>
      <form action={formHandle} className="bg-amber-200 p-4 flex flex-col">
        <div>
          <label htmlFor="title">title:</label>
          <input
            type="text"
            name="title" 
            id="title"
            className="bg-white border rounded-2xl mx-2"
          />
          <p className="text-red-500">{state?.error}</p>
        </div>
        <SubmitBtn />
      </form>
    </>
  );
};

export default ServerAction;
