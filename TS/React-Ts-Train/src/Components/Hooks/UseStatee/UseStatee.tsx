import type React from "react";
import { useState } from "react";

const UseStatee: React.FC = (): React.ReactNode => {
  type User = {
    id: number;
    name: string;
    email: string;
  };
  const Users: User[] = [
    { id: 1, name: "erfan", email: "erfan@gmail.com" },
    { id: 2, name: "ali", email: "ali@gmail.com" },
  ];
  const [user, setUser] = useState<User[]>([]);
  setUser(Users );
  setUser(Users);
  return (
    <>
      <ul>
        {user.map((item) => {
          return (
            <li key={item.id}>
              User Name = {item.name} & User Email = {item.email}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseStatee;
