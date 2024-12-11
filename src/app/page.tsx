import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Link from "next/link";
import TopNav from "./_components/TopNav";
import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="flex flex-wrap gap-4">
      {[...images, ...images, ...images].map((img, index) => (
        <div key={img.id + index} className="w-48 p-4">
          <img src={img.url} alt={img.name}></img>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <TopNav />
      <SignedOut>
        <div className="h-full w-full pt-6 text-center text-2xl">
          Please sign in
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
