"use server";
import { revalidatePath } from "next/cache";

export default async function addPost( _, formData) {
  const title = formData.get("title");
  await fetch("http://localhost:3001/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  }).then(() => {
    revalidatePath("/S4/fetch-server-component");
  });

  if (!title) {
    return {
      error: "title is required",
    };
  }
}
