import Link from "next/link";
import Image from "next/image";
import blogData from "@/components/Blog/blogData";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ViewblogDetails = ({ params }) => {
  const id = params.id;
  const blog = blogData.find((blog) => blog.id == id);

  return (
    <section className="relative px-4 py-24 md:px-8 bg-gray-100 min-h-screen flex flex-col justify-center items-start">
      <div className="container mx-auto max-w-3xl">
        {blog ? (
          <div>
            <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={500}
              layout="responsive"
              className="rounded-xl object-cover object-center mb-8"
            />
            <h1 className="text-4xl md:text-5xl font-semibold mb-2 text-gray-800">
              {blog.title}
            </h1>
            <p className="mb-6 text-gray-500">
              Published by{" "}
              <span className="font-semibold">{blog.author.name}</span> on{" "}
              {blog.publishDate}
            </p>
            <div className="prose lg:prose-lg mb-10">{blog.paragraph}</div>
            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {blog.content}
              </ReactMarkdown>
            </div>
 
            <p className="font-semibold text-lg">Author:</p>
            <div className="flex items-center mt-2">
              <Image
                src={blog.author.image}
                alt={blog.author.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="font-medium text-gray-800">{blog.author.name}</p>
                <p className="text-sm text-gray-500">
                  {blog.author.designation}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default ViewblogDetails;
