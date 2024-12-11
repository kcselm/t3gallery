import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Link from "next/link";
import TopNav from "./_components/TopNav";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log("images: ", images);

  return (
    <main>
      <TopNav />
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((img, index) => (
          <div key={img.id + index} className="w-48 p-4">
            <img src={img.url} alt={img.name}></img>
          </div>
        ))}
      </div>
    </main>
  );
}
