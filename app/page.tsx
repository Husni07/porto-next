import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="lg:flex lg:gap-4 lg:mx-10 lg:px-8">
        <div className="lg:w-1/3">
          {/* <Image
          src="/Images/gambar.jpg"
          width={500}
          height={500}
          draggable={false}
          alt=""
          className="h-60 w-60 lg:h-full lg:w-full p-4 object-cover rounded-full m-auto border-2 border-ungu hover:scale-105 duration-300 animasi"
        /> */}
          <Image
            src="/Images/pantai.jpg"
            loading="lazy"
            alt=""
            draggable={false}
            width={500}
            height={500}
            className="h-60 w-60 lg:h-full lg:w-full p-4 object-cover m-auto rounded-full sepia hover:filter-none hover:scale-105 hover:-rotate-12 duration-700 cursor-pointer"
          />
        </div>
        <div className="desc lg:w-2/3 mx-3 my-5 lg:m-0 lg:py-10">
          <h1 className="text-5xl font-semibold text-center sm:text-left">
            Hallo I&apos;m Husnii
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
            Welcome to my personal website, where you can find my achievements,
            projects, and more
          </p>
          <hr className="mb-3 mt-2" />
          <p className="text-xs italic text-center  animate-pulse">
            <q>
              If you are not willing to risk the unusual, you will have to
              settle for the ordinary.
            </q>
          </p>
        </div>
      </main>
    </>
  );
}
