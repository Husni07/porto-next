import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <main className="px-4 md:px-10 flex flex-col gap-4">
      <h1 className="p-4 rounded-md text-2xl underline underline-offset-8 decoration-double decoration-merah bg-abu">
        Projects
      </h1>
      <section className="lg:flex lg:gap-4 lg:mx-10 lg:px-8 flex-row-reverse">
        <div className="lg:w-1/3">
          <Image
            src="/Images/download.png"
            alt=""
            draggable={false}
            width={500}
            height={500}
            data-aos="fade-up-left"
            className="h-64 lg:h-full p-4 object-cover m-auto"
          />
        </div>
        <div className="lg:w-2/3 mx-3 my-5 lg:m-0 lg:py-10" data-aos="fade-up-right">
          <h1 className="text-5xl font-semibold text-center sm:text-left">
            Hallo
            <span className="bg-gradient-to-r from-merah to-ungu bg-clip-text text-transparent">
              I&apos;m Husni
            </span>
          </h1>
          <p className="text-xl lg:text-2xl">
            My full name is&nbsp;
            <span className="bg-gradient-to-r text-4xl from-merah to-ungu bg-clip-text text-transparent">
              Moh. Husni Mubarrok
            </span>
            <br />
            <span className="bg-gradient-to-r from-merah to-ungu bg-clip-text text-transparent">
              I&apos;m a Student, Junior Web Developer.&nbsp;
            </span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel maxime in asperiores, delectus quisquam ipsam dolorem nihil earum labore consequuntur esse nobis quasi voluptates repudiandae dicta dignissimos eius quo voluptate?
          </p>
          <hr className="mb-3 mt-2" />
          <p className="text-xs italic text-center animate-pulse">
            <q>Wong e ngantukan</q>
          </p>
        </div>
      </section>
      <hr className="mb-14" />

      <section className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
        <div className="m-auto">
          <Image
            src="/Images/pantai.jpg"
            loading="lazy"
            alt=""
            draggable={false}
            width={500}
            height={500}
            className="rounded-full sepia hover:filter-none hover:scale-110 hover:-rotate-12 duration-700 cursor-pointer"
          />
        </div>
        <div className="col-start-3" >
          <Image
            src="/Images/doge.jpg"
            loading="lazy"
            alt=""
            draggable={false}
            width={500}
            height={500}
            className="w-full rounded-2xl hover:rounded-md blur hover:blur-none duration-500 cursor-pointer"
          />
        </div>
        <div>
          <Image
            src="/Images/shiba.jpg"
            loading="lazy"
            alt=""
            draggable={false}
            width={500}
            height={500}
            className="rounded-2xl hover:rounded-md blur hover:blur-none duration-500 cursor-pointer"
          />
        </div>
        <div>
          <Image
            src="/Images/bonk.webp"
            loading="lazy"
            alt=""
            draggable={false}
            width={500}
            height={500}
            className="rounded-2xl hover:rounded-md blur hover:blur-none duration-500 cursor-pointer"
          />
        </div>
        <div className="row-start-1 col-start-2 col-span-2">
          <Image
            src="/Images/bnb.png"
            loading="lazy"
            alt=""
            draggable={false}
            width={1000}
            height={600}
            className="rounded-2xl hover:rounded-md blur hover:blur-none duration-500 cursor-pointer"
          />
        </div>
      </section>
    </main>
  );
};

export default about;
