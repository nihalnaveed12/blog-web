import { Posts } from "@/components/blog";
import Image from "next/image";

export default async function Blog({ params }: { params: { id: string } }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const posts: Posts[] = await res.json();

    const post = posts.find((p) => p.id === Number(params.id));

    if (!post) {
      return <h1>Post not found!</h1>;
    }

    return (
      <div className="max-w-screen-md pt-16 mx-auto px-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="font-semibold">{post.author}</p>
          <Image
            src={post.src}
            alt={post.title}
            height={1000}
            width={1000}
            className="w-[500px]"
          />
          <p className="">{post.content}</p>
        </div>
      </div>
    );
  } catch {
    console.error("Failed to fetch posts:"); 
    return <h1>Error fetching data. Please try again later.</h1>;
  }
}
