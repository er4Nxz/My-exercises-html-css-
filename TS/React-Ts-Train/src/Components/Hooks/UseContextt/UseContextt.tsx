import { type FC, type ReactNode } from "react";
import Comp from "./Comp";
import ThemesContext from "./context/ThemeContext";

const UseContextt: FC = (): ReactNode => {
  return (
    <>
      <ThemesContext>
        <Comp />
      </ThemesContext>

      <ThemesContext>
        <Comp />
      </ThemesContext>
    </>
  );
};

export default UseContextt;
