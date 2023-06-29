"use client";
import React, { useState } from "react";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3; // Change this to change the number of blogs per page
  const totalBlogs = blogData.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  const currentBlogs = blogData.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <Breadcrumb
        pageName="Blog"
        description="Dive into our latest articles covering a wide range of interesting topics and expand your knowledge."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {currentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition ${
                      currentPage === 1
                        ? "cursor-not-allowed"
                        : "hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    }`}
                  >
                    Prev
                  </button>
                </li>

                {/* Insert page number logic here */}

                <li className="mx-1">
                  <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className={`flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition ${
                      currentPage === totalPages
                        ? "cursor-not-allowed"
                        : "hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    }`}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
