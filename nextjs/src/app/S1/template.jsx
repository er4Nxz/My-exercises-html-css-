const S1template = ({ children }) => {
  return (
    <>
      <input
        type="text"
        className="bg-white block mt-3"
        placeholder="Template"
      />
      {children}
    </>
  );
};

export default S1template;
