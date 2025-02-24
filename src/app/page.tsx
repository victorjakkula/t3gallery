export const dynamic = "force-dynamic"; 
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { db } from "pnpm/server/db";
export const revalidate = 0; 
const mockUrl = ["https://w6l4i72ztb.ufs.sh/f/tK37us19w7TVqTTr9HStGkQF5X1f3IWceTErA2OJudHY7jwg",
"https://w6l4i72ztb.ufs.sh/f/tK37us19w7TV3CjvzYlPcjWltvwBb2RTFrGn8p3NYZd0J5XM",
"https://w6l4i72ztb.ufs.sh/f/tK37us19w7TVSB18IfmsHTFheVxOwZjBgQPS6Gr8vdYo57MX",
"https://w6l4i72ztb.ufs.sh/f/tK37us19w7TV7UA5s0C3sbfLTZlqHNvnu4RYE1ptgMcxO09o",
"https://w6l4i72ztb.ufs.sh/f/tK37us19w7TVvPhJyxgbj1mCORYN2pfPdk3AMicXgVoKqsWz"
 ]

 
  const mockImage = mockUrl.map((url, index) => ({
    id: index+1,
    url,

  }))
export default async function HomePage() {
  const posts=await db.query.posts.findMany()
  console.log(posts)
   const dynamic="force-dynamic";
   revalidatePath("/");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-4">
        {posts.map((posts)=>(<div key={posts.id}>{posts.name}</div>))}
        {
     [...mockImage,...mockImage,...mockImage].map((image, index) => (
        <div key={image.id} className="w-48">
          <img src={image.url} />
        </div>
      ))}
       

      </div>
    </main>
  );
}
