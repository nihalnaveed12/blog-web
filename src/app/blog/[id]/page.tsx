import { Posts } from "@/components/blog";
import Image from "next/image";

export default async function Blog({ params }: { params: { id: string } }) {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts: Posts[] = await res.json();

  const post = posts.find((p) => p.id === Number(params.id));

  if (!post) {
    return <h1>Post not found!</h1>;
  }

  return (
    <div className="max-w-screen-md pt-16 mx-auto px-4">
      <div className="flex flex-col  gap-4">
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
}
