import React from "react";
import Image from "next/image";


const Projects = () => {
  return (
      <div className="px-4 md:px-10 flex flex-col gap-4">
        <h1 className="p-4 rounded-md text-2xl underline underline-offset-8 decoration-double decoration-merah bg-abu">
          Projects
        </h1>
        <section className="container rounded-md m-auto">
          <div className="p-2 flex flex-col lg:flex-row gap-4 mb-10 rounded-md border-l-2 border-b-2 border-merah hover:bg-abu duration-300 delay200 animate-pulse hover:animate-none">
            <div className="lg:w-1/2">
              <img
                src="/Images/barrstore.png"
                className="rounded-md animasi-05"
              />
            </div>
            <p className="m-auto">-</p>
            <div className="lg:w-1/2 bg-abu rounded-md p-2 animasi">
              <h1 className="text-2xl mb-2 ml-2 italic font-bold underline decoration-merah bg-gradient-to-tr from-merah to-ungu bg-clip-text text-transparent">
                BARRStore
              </h1>
              <q className="text-lg">
                Is a platform for selling game vouchers and limited in-game
                items with the best price offers. Built with HTML, CSS, and PHP.
              </q>
            </div>
          </div>
          <div className="p-2 flex flex-col lg:flex-row-reverse gap-4 mb-10 rounded-md border-r-2 border-b-2 border-merah hover:bg-abu duration-300 delay200 animate-pulse hover:animate-none">
            <div className="lg:w-1/2">
              <img
                src="/Images/barrflix.png"
                className="rounded-md animasi-05"
              />
            </div>
            <p className="m-auto">-</p>
            <div className="lg:w-1/2 bg-abu rounded-md p-2 animasi">
              <h1 className="text-2xl mb-2 ml-2 italic font-bold underline decoration-merah bg-gradient-to-tr from-merah to-ungu bg-clip-text text-transparent">
                BARRFlix
              </h1>
              <q className="text-lg">
                Is a streaming platform that offers a wide variety of films,
                from blockbuster hits to indie gems, catering to every taste and
                preference imaginable. Built with Laravel-10 and Tailwind CSS
              </q>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Projects;
