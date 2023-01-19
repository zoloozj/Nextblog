import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { hamburgerIcon, moon, sun, times } from "public";
import { useTheme } from "next-themes";
export default function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    setMenuToggle((current) => !current);
  };

  const { systemTheme ,theme, setTheme } = useTheme();
  return (
    <div className="py-6">
      <div className="bg-transparent flex justify-between">
        <Link href="/" className="uppercase text-2xl font-bold text-blue-800 dark:text-blue-300">
          Золоо's Блог
        </Link>
        <div className="gap-4 justify-around items-center text-lg font-semibold hidden md:flex">
          <Link className="text-blue-700 hover:text-blue-400 dark:text-blue-200" href="#">
            Мэдээ
          </Link>
          <Link className="text-blue-700 hover:text-blue-400 dark:text-blue-200" href="#">
            Манга
          </Link>
          <Link className="text-blue-700 hover:text-blue-400 dark:text-blue-200" href="#">
            Анимэ
          </Link>
          {theme !== "dark" ? (
            <button onClick={()=> setTheme("dark")}>
              <Image
                width={24}
                height={24}
                src={moon}
                alt="moon"
              />
            </button>
          ) : (
            <button onClick={()=> setTheme("light")}>
              <Image
                width={24}
                height={24}
                className="text-black"
                src={sun}
                alt="sun"
              />
            </button>
          )}
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleMenu}>
            {!menuToggle ? (
              <Image width={34} height={34} src={hamburgerIcon} alt="menu" />
            ) : (
              <>
                <Image width={34} height={34} src={times} alt="close" />
                <div className="flex flex-col justify-start absolute top-16 right-0 w-1/3 bg-white shadow-sm">
                  <div className="gap-4 justify-around items-center text-lg font-semibold flex flex-col">
                    <Link className="hover:text-blue-500" href="#">
                      Мэдээ
                    </Link>
                    <Link
                      className="text-blue-700 hover:text-blue-500"
                      href="#"
                    >
                      Манга
                    </Link>
                    <Link
                      className="text-blue-700 hover:text-blue-500"
                      href="#"
                    >
                      Анимэ
                    </Link>
                  </div>
                </div>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
