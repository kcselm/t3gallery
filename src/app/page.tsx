import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Link from "next/link";
import TopNav from "./components/TopNav";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/43a34a54-b036-4ac8-b7e2-890e34901d37-1t8ncw.jpeg",
  "https://utfs.io/f/43a34a54-b036-4ac8-b7e2-890e34901d37-1t8ncw.jpeg",
  "https://utfs.io/f/43a34a54-b036-4ac8-b7e2-890e34901d37-1t8ncw.jpeg",
  "https://utfs.io/f/43a34a54-b036-4ac8-b7e2-890e34901d37-1t8ncw.jpeg",
];

export const dynamic = "force-dynamic";

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log("posts: ", posts);

  return (
    <main>
      <TopNav />
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((img, index) => (
          <div key={img.id + index} className="w-48 p-4">
            <img src={img.url} alt={img.url}></img>
          </div>
        ))}
      </div>
    </main>
  );
}
