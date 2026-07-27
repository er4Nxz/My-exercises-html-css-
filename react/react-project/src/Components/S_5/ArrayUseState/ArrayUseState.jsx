import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const ArrayUseState = () => {
  const [person, setPerson] = useState(["Erfan Ahmadi", "ali Yosefi"]);
  const [name, setName] = useState("");
  const addToPerson = () => {
    setPerson([...person, name]);
    setName("");
  };
  const addToName = (e) => {
    setName(e.target.value);
  };
  const printLi = person?.map((item, index) => {
    return (
      <li className="list-decimal" key={index + 1}>
        {item}
      </li>
    );
  });

  const [icon, setIcon] = useState(true);
  const [type, setType] = useState("password");
  return (
    <>
      {/* list Name */}
      <div className="mt-2 mx-auto rounded-2xl bg-fuchsia-300 p-3 w-1/3">
        <label htmlFor="fullName" className="cursor-pointer">
          full Name :
        </label>
        <input
          type="text"
          id="fullName"
          className="bg-blue-300 rounded-lg m-1 p-0.5 text-white"
          onChange={addToName}
          value={name}
        />
        <button
          className="bg-cyan-300 rounded-lg cursor-pointer p-1"
          onClick={addToPerson}
        >
          click
        </button>
        <ul className="text-center">{printLi}</ul>
      </div>
      {/* password */}
      <div className="w-1/3 bg-cyan-700 p-3 rounded-2xl mt-2 mx-auto flex flex-row justify-center items-center gap-1">
        <label htmlFor="pssword" className="text-white">
          password :
        </label>
        <input
          type={type}
          id="password"
          className="bg-white rounded-2xl p-1 focus:outline-none"
        />
        {icon ? (
          <FaEyeSlash
            fontSize={20}
            color="white"
            className="cursor-pointer  p-1 w-[30px] transition-all ease-linear h-[30px] hover:bg-white/30 hover:rounded-4xl active:bg-white/70"
            onClick={() => {
              (setIcon(false), setType("text"));
            }}
          />
        ) : (
          <FaEye
            fontSize={20}
            color="white"
            className="cursor-pointer  p-1 w-[30px] transition-all ease-linear h-[30px] hover:bg-white/30 hover:rounded-4xl active:bg-white/70"
            onClick={() => {
              (setIcon(true), setType("password"));
            }}
          />
        )}
      </div>
    </>
  );
};

export default ArrayUseState;
