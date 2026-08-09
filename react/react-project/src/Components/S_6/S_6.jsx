import React from "react";
import ComA from "./ComA/ComA";
import ApiContext from "./ApiContext/ApiContext";
import MyReducer from "./MyReducer/MyReducer";
import ReducerContext from "./ReducerContext/ReducerContext";
import MySkeleton from "./MySkeleton/MySkeleton";
import Memo from "./Memo/Memo";
import MyUseRef from "./MyUseRef/MyUseRef";

export const MyContext = React.createContext();

const S_6 = () => {
  {
    /* 
    context api / useContext =>defult
    Context => Api
    Reducer / useReducer
    reducer with object / reducer + context
    Skeleton whith fake delay and real delay
    Memo 
    useRef
    */
  }
  // const fullName = "erfan ahmadi"
  // const age = 25
  // const email = "e@gmail.com"
  // const partner = "ali"
  return (
    <>
      {/* <MyContext.Provider value={{ fullName, age, email, partner }}>
        <ComA />
      </MyContext.Provider> */}
      {/* ************************************ */}
      {/* <ApiContext /> */}
      {/* ************************************ */}
      {/* <MyReducer/> */}
      {/* ************************************ */}
      {/* <ReducerContext/> */}
      {/* ************************************ */}
      {/* <MySkeleton /> */}
      {/* ************************************ */}
      {/* <Memo/> */}
      {/* ************************************ */}
      {/* <MyUseRef/> */}
    </>
  );
};

export default S_6;
