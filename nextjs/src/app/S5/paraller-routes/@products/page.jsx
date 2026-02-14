import Link from "next/link";

const Products = () => {
    return (
      <div className="bg-blue-500 text-2xl w-full h-full rounded-2xl mx-auto p-4  text-center">
        Products
        <Link href="/S5/paraller-routes/setting">Setting</Link>
      </div>
    );
}
 
export default Products;