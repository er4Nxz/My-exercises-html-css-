import BackButton from "@/Components/S1/Button/BackButton";

const S1Layout = ({ children }) => {
  return (
    <>
      <BackButton />
      <div className="mx-auto p-4 bg-amber-200">
        <input type="text" className="bg-white " placeholder="layout" />
        {children}
      </div>
    </>
  );
};

export default S1Layout;
