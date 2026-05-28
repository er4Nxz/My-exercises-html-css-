"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ item }) => {
  const pathName = usePathname();
  const Check = pathName.startsWith(item.link) || pathName === item.link;
  return (
    <>
      <li>
        <Link
          className={Check ? "text-blue-100" : "text-black"}
          href={item.link}
        >
          {item.title}
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
