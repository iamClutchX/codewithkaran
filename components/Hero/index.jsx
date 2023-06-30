import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container mx-auto  py-4 flex md:flex-row flex-col items-center">
          <div className="w-full lg:w-1/2 ">
            <div>
              <p className="text-left font-bold text-lg ">Hi, my name is</p>
              <p className="text-primary font-bold text-4xl lg:text-5xl xl:text-6xl text-left mb-4">
                Ram Karan
              </p>
            </div>

            <div className="text-lg  mb-6 text-justify">
              <p>
                I have built many industry grade projects from scratch and am
                armed with many technological skills useful for tech projects.
                Check out my projects below.
              </p>
            </div>

            <div className="flex  h-20 p-2 bg-primary items-center justify-around bg-yellow-500 rounded-3xl">
              <div className="text-center">
                <h2 className="font-bold text-2xl">7</h2>
                <p className="text-sm">Verified Skills</p>
              </div>
              <div className="border-l-2 border-white h-full mx-2"></div>
              <div className="text-center">
                <h2 className="font-bold text-2xl">14</h2>
                <p className="text-sm">All Projects</p>
              </div>
              <div className="border-l-2 border-white h-full mx-2"></div>
              <div className="text-center">
                <h2 className="font-bold text-2xl">150+</h2>
                <p className="text-sm">Designed Pages</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block  relative w-[400px] h-[400px] mx-auto">
            <Image
              src="/images/profile.jpg"
              alt="Your Name"
              layout="fill"
              objectFit="cover"
              className="rounded-full absolute inset-0"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
