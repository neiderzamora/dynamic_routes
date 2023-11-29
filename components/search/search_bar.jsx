"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBarCom() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/search/result?q=${searchTerm}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="relative overflow-hidden bg-green-500 py-20 sm:py-32">
      <div className="relative isolate px-6 lg:px-8">
        <div className="flex justify-center items-center lg:mx-32 2xl:mx-72 h-[calc(100vh-11rem)] lg:h-[calc(100vh-16rem)] ">
          <div className="flex justify-center items-center rounded-md bg-[#0c2f39]/70 h-auto w-full px-8 py-8">
            <ul className="text-base text-gray-200 w-full">
              <li className="mb-4 sm:mb-0 text-3xl lg:text-4xl font-lexend">
                Tu guía confiable,{" "}
                <span className="bg-yellow-one text-blue-one hidden lg:inline-flex">
                  un Clap a la vez👏🏻.
                </span>
              </li>
              <li className="mb-4 sm:mb-0 text-3xl lg:text-4xl font-lexend lg:hidden">
                <span className="bg-yellow-one text-blue-one">
                  un Clap a la vez.👏🏻
                </span>
              </li>
              <li className="hidden md:block mb-6 text-md lg:text-xl font-extralight">
                Somos la conexión entre tus necesidades y las soluciones que
                estás buscando.
              </li>
              <li>
                <div className="border-2 mb-2 justify-between shadow-xl shadow-gray-800/50 border-gray-50 bg-white hover:border-gray-100 h-14 w-full rounded-xl px-4 py-2 flex items-center">
                  <span className="text-gray-400 mr-2">🔍</span>
                  <input
                    type="text"
                    className="w-full outline-none pl-3 text-gray-500 font-lexend"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <button
                    className="hidden sm:block bg-blue-one hover:bg-blue-one/90 px-4 py-2 rounded-3xl text-white text-lg"
                    onClick={handleSearch}
                  >
                    <span className="text-gray-50">🔍</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
