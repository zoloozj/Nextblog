import Image from "next/image";
import { profile } from "public";

export default ({ author, date, img, title, content }) => (
  <div className="flex flex-col gap-4 p-4 shadow-xl shadow-gray-400">
    <div className="flex justify-start gap-6 items-center my-4">
      <Image
        src={profile}
        className="rounded-full object-cover w-[64px] h-[64px]"
      />
      <div className="flex flex-col justify-start">
        <h2 className="font-bold">{author}</h2>
        <p className="text-gray-400 text-xs">{date}</p>
      </div>
    </div>
    <Image src={img} alt={title} className="object-cover w-[280px] h-[300px]" />
    <h1 className="font-bold text-lg">{title}</h1>
    <p>{content}</p>
  </div>
);
