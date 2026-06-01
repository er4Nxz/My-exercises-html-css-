const NotFound = () => {
  return (
    <div className="w-full flex justify-center items-center" style={{ height:"calc(100vh - 60px)" }}>
      <h1 className="capitalize inline-block text-danger">not found</h1>
      <span className="spinner-border mx-2 text-rose-500"></span>
    </div>
  );
};

export default NotFound;
