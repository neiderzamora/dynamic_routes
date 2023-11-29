"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Index from "@/components/index";
import { useRouter } from "next/navigation";

function ResultBarsearch() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  useEffect(() => {
    if (query) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const apiUrl = `https://jsonplaceholder.typicode.com/users?q=${query}${encodeURIComponent(
        query
      )}&page=${currentPage}&per_page=${itemsPerPage}`;

      setLoading(true);
      setError(null);

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error al obtener los resultados:", error);
          setError(error);
          setLoading(false);
        });
    }
  }, [query, currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageResults = results.slice(startIndex, endIndex);

  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : results.length === 0 ? (
        <div className="mx-8 sm:mx-20 mt-32 h-[calc(100vh-10rem)]">
          <p className="font-extralight sm:text-xl text-lg text-white">
            No encontramos resultados para {query}.
          </p>
          <button className="mt-6 sm:text-lg text-md pr-6" onClick={handleBack}>
            Regresar
          </button>
        </div>
      ) : (
        <div className="max-w-[1440px] mx-auto bg-blue-two">
          <h1 className="mb-2 mt-28 lg:mt-32 ml-6 lg:ml-8 text-lg lg:text-2xl text-white">
            Resultados de la búsqueda:{" "}
            <span className="font-extralight">{query}</span>
          </h1>
          <hr className="border-yellow-one/50 mx-2" />
          <Index results={currentPageResults} />
          <hr className="border-yellow-one/50 mt-2 mx-2" />
        </div>
      )}
    </>
  );
}

export default ResultBarsearch;
