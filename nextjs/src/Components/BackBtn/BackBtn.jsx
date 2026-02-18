"use client";
const Backbtn = () => {
  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          window.history.back();
        }}
      >
        Click Back
      </button>
    </>
  );
};

export default Backbtn;
