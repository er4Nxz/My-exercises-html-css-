import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  let a = await cookies();
  a.set("username", "erfan");
  console.log(a.getAll());

  // redirect("/S6");

  return NextResponse.json({ message: "hello,world!!" });
}

//POST
export async function POST(request) {
  let a = await request.json();
  console.log(a);
  return NextResponse.json(a);
}
