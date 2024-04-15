import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/88f8ecb5-cc38-4165-9207-c4a8150f86a2-1tcrqd.png",
  "https://utfs.io/f/a375b340-1831-4871-999a-6e2f9c52db68-ho5kq5.png",
  "https://utfs.io/f/cdf37060-78b4-4054-b6b1-932b61bfaf42-7kcux2.png",
  "https://utfs.io/f/9d9c2217-468c-495f-81a4-69a52bb53416-m1knjz.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
