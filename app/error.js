"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const statusCode = error?.statusCode || 500;

  const reset = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-6xl font-bold">Oops!</h1>
      <h2 className="mt-2 text-3xl">Something went wrong!</h2>
      <p className="mt-4 text-xl text-center">
        But dont worry, were on it. You can try refreshing the page, or come
        back later.
      </p>
      <div className="flex flex-col md:flex-row md:justify-between mt-4 pt-4 space-y-4 md:space-y-0 md:space-x-4">
        <button
          onClick={reset}
          className="px-4 py-2 bg-red text-gray-100 rounded-lg hover:bg-gray-800 focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 hover:bg-yellow hover:outline-white "
        >
          Refresh
        </button>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-red text-gray-100 rounded-lg hover:bg-gray-800 focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 hover:bg-yellow hover:outline-white "
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
