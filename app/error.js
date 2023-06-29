"use client"
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-6xl font-bold">Oops!</h1>
      <h2 className="mt-2 text-3xl">Something went wrong!</h2>
      <p className="mt-4 text-xl text-center">But dont worry, were on it. You can try refreshing the page, or come back later.</p>
      <button 
        className="mt-8 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={() => reset()} 
      >
        Try again
      </button>
    </div>
  );
}
