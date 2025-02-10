import Link from "next/link";

const mockUrls = [
  "https://g5x4q1izk3.ufs.sh/f/Qn9aCCYvIgo9MqkzOo0wZz5WTSyr6Yqn2wbXgPmkALBCoHlx",
  "https://g5x4q1izk3.ufs.sh/f/Qn9aCCYvIgo9JVqENVCBwRMKAoiey0T42sQLmtVz98aE1C5P",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
        {[...mockImages, ...mockImages].map((image, index) => (
          <div key={index} className="w-1/2 p-4">
            <img src={image.url} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      hello (gallery in progress)
    </main>
  );
}
