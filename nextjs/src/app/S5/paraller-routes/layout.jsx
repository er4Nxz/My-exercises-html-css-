const Layout = (prop) => {
  return (
    <div className="bg-green-300 text-2xl  rounded-2xl mx-auto p-4  text-center h-125 w-full">
      <div>{prop.children}</div>
      <div className="flex flex-row justify-center items-center gap-4 w-full h-full">
        <div>{prop.users}</div>
        <div>{prop.products}</div>
      </div>
    </div>
  );
};

export default Layout;
