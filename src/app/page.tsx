import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Link from "next/link";
import TopNav from "./components/TopNav";

const mockUrls = [
  "https://utfs.io/f/43a34a54-b036-4ac8-b7e2-890e34901d37-1t8ncw.jpeg",
  "https://utfs.io/f/43a34a54-b036-4ac8-b7e2-890e34901d37-1t8ncw.jpeg",
  "https://utfs.io/f/43a34a54-b036-4ac8-b7e2-890e34901d37-1t8ncw.jpeg",
  "https://utfs.io/f/43a34a54-b036-4ac8-b7e2-890e34901d37-1t8ncw.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <TopNav />
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((img) => (
          <div key={img.url} className="w-48 p-4">
            <img src={img.url} alt={img.url}></img>
          </div>
        ))}
      </div>
    </main>
  );
}
