export const dynamic = "force-dynamic"; // ✅ Correct way

import Link from "next/link";
import { db } from "pnpm/server/db";



export default async function HomePage() {
  const posts = await db.query.images.findMany();
  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-4">
        
        {[...posts, ...posts, ...posts].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
