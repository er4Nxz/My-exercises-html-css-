import Link from "next/link";

const S5 = () => {
  //paraller Routes
  //entercepting
  return (
    <>
      <div className="w-1/4 bg-amber-200 rounded-2xl mx-auto p-4 m-4">
        <Link href={"/S5/entercepting"}>entercepting</Link>
        <br />
        <Link href={"/S5/paraller-routes"}>paraller Routes</Link>
      </div>
    </>
  );
};

export default S5;
