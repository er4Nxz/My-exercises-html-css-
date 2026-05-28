"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const S6 = () => {
  // api
  // cookie
  // redirect
  const route = useRouter();

  const [name, setName] = useState();
  //POST
  const formHandle = (e) => {
    e.preventDefault();
    let a = async () => {
      let res = await axios.post("http://localhost:3000/S6/api", {
        name,
      });
      if (res.status === 200) {
        route.refresh();
      }
    };
    a()
  };
  //MIDDLEWARE
  return (
    <>
      <button
        className="p-3 bg-red-300 m-4 "
        onClick={() => {
          route.push("/S6/api");
        }}
      >
        Api
      </button>

      <form
        action="#"
        method="post"
        onSubmit={(e) => {
          formHandle(e);
        }}
      >
        <label htmlFor="name" className="bg-amber-300 rounded-2xl p-2">
          name :{" "}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="border-2"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default S6;
