import { profile } from "public";
import Link from "next/link";
export default ({ post }) => (
  <div className="flex flex-col gap-4 p-4 shadow-xl w-full self-stretch sm:min-w-[300px] shadow-gray-400">
    <div className="flex justify-start gap-6 items-center mt-4">
      <img
        src={post.publisher.pic}
        className="rounded-full object-cover w-[64px] h-[64px]"
        alt="profile"
      />
      <div className="flex flex-col justify-start">
        <h2 className="font-bold">{post.publisher.name}</h2>
        <p className="text-gray-400 text-xs">{post.date}</p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`} className="hover:text-blue-500">
      <img
        src={post.image}
        alt={post.title}
        className="object-cover mx-auto w-full h-[300px]"
      />
      <h1 className="font-bold text-lg">{post.title}</h1>
    </Link>
    <p>{post.category}</p>
  </div>
);
