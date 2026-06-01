import { useContext } from "react";
import { MyContext } from "./context/ThemeContext";

const Comp = () => {
  const themes = useContext(MyContext);
  return (
    <>
      <div style={{ backgroundColor: themes.darkmode.main }}>
        <h1 style={{ color: themes.darkmode.text }}>hello,world!</h1>
      </div>
      <div style={{ backgroundColor: themes.darkmode.main }}>
        <h1 style={{ color: themes.darkmode.text }}>hello,world!</h1>
      </div>
    </>
  );
};

export default Comp;
