import Blog from "@/components/blog";
import Hero from "@/components/Hero";

export const revalidate = 10

export default function Home() {
  return (
    <>
      <Hero />
      <Blog />
    </>
  );
}
