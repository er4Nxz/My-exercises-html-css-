import NavLinks from "./NavLinks";
const Header = () => {
  const Navs = [
    {
      title: "S1",
      link: "/S1",
    },
    {
      title: "S2",
      link: "/S2",
    },
    {
      title: "S3",
      link: "/S3",
    },
    {
      title: "S4",
      link: "/S4",
    },
    {
      title: "S5",
      link: "/S5",
    },
  ];
  return (
    <>
      <div className="w-full p-4 ">
        <ul className="flex flex-row gap-10 justify-center">
          {Navs?.map((item, index) => {
            return <NavLinks key={index} item={item} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Header;
