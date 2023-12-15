import Image from "next/image";
import Posts from "@/app/posts/page";
import { db } from "@/db";

export default function Home() {
  console.log(db);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>final prep</h1>
    </main>
  );
}
