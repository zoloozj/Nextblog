import { profile } from "public";
import Image from "next/image";

export default () => (
  <div className="w-full my-4 p-6 shadow-gray-400 shadow-xl">
    <div className="flex justify-start gap-6 items-center bottom-line my-4 pb-4">
      <Image src={profile} className="rounded-full object-cover w-[64px] h-[64px]" />
      <div className="flex flex-col justify-start">
        <h2 className="font-bold">Баярсайхан Золжаргал</h2>
        <p className="text-gray-400 text-xs">2023 оны 1-р сарын 11</p>
      </div>
    </div>
    <h1 className="font-bold">JAMstack архитектурын тухай</h1>
    <p className="text-gray-500">Статик сайт</p>
  </div>
);
