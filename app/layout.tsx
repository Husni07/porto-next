"use client";
import { useState, useEffect } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import GetCoin from "./crypto/fetchApi";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
// export const metadata: Metadata = {
//   title: "Hi I'm Husni👋",
//   description:
//     "I'm a Student, Junior Web Developer. Welcome to my personal website, where you can find my achievements, projects, and more",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItem = (url: string, title: string) => {
    return (
      <div className="text-base font-bold w-50 underline underline-offset-4 hover:decoration-ungu hover:text-merah hover:ease-in-out hover:duration-500">
        <Link href={url}>
          <span>{title}</span>
        </Link>
      </div>
    );
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  });

  return (
    <html lang="en">
      <head></head>
      <body className="flex-col justify-center bg-[#000] text-white select-none">
        <div className="bg-transparent backdrop-blur-md sticky w-full top-0 z-50">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center space-x-5">
              <Link href="" className="">
                <div>
                  <span className="text-4xl font-bold bg-gradient-to-r from-merah to-ungu bg-clip-text text-transparent">
                    BARR&apos;
                  </span>
                  <span className="text-4xl font-bold">Q</span>
                </div>
              </Link>
              <GetCoin />
            </div>
            <div className="hidden md:flex gap-2">
              {navItem("/", "Home")}
              {navItem("/projects", "Projects")}
              {navItem("/about", "About")}
              {navItem("/crypto", "Crypto")}
            </div>

            <div className="md:hidden relative">
              <div className="flex items-center justify-between px-4 py-2">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  type="button"
                  className=""
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  {menuOpen ? (
                    <Image
                      src="/Images/hamburger.svg"
                      alt="p"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <Image
                      src="/Images/hamburger-active.svg"
                      alt="p"
                      width={40}
                      height={40}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          {menuOpen && (
            <div className="md:hidden">
              <ul className="flex flex-col w-full px-10 py-2 absolute bg-gradient-to-tr from-black to-abu">
                <li className="text-base font-bold w-50 underline underline-offset-4 hover:decoration-ungu hover:text-merah hover:ease-in-out hover:duration-500">
                  <Link href="#">
                    <span>Home</span>
                  </Link>
                </li>
                <li className="text-base font-bold w-50 underline underline-offset-4 hover:decoration-ungu hover:text-merah hover:ease-in-out hover:duration-500">
                  <Link href="projects">
                    <span>Projects</span>
                  </Link>
                </li>
                <li className="text-base font-bold w-50 underline underline-offset-4 hover:decoration-ungu hover:text-merah hover:ease-in-out hover:duration-500">
                  <Link href="about">
                    <span>About</span>
                  </Link>
                </li>
                <li className="text-base font-bold w-50 underline underline-offset-4 hover:decoration-ungu hover:text-merah hover:ease-in-out hover:duration-500">
                  <Link href="crypto">
                    <span className="cursor-not-allowed">Crypto</span>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="z-[-1] absolute flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-merah after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-ungu after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
        {children}
        <div className="z-[-1] absolute flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-merah after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-ungu after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>

        <div className="font-semibold lg:text-xl md:text-lg text-base bg-transparent backdrop-blur-md w-full mt-10">
          <div className="flex flex-row justify-between items-center">
            <div className="py-5 mx-5 animate-bounce">
              <div className="text-base font-bold border-white border-2 py-3 px-8 rounded-lg w-50 mt-2 hover:text-slate-700 hover:ease-in-out hover:duration-500 hover:cursor-pointer hover:border-ungu">
                <Link href="https://api.whatsapp.com/send?phone=6285866242248&text=lu%20ganteng%20amat%20bang">
                  <span>Contact Me →</span>
                </Link>
              </div>
            </div>
            <div className="py-5 mx-5 text-4xl flex flex-wrap gap-3">
              <Link href="https://www.instagram.com/" target="_blank">
                <i className="fab fa-instagram hover:scale-105 hover:text-merah duration-300"></i>
              </Link>

              <Link href="https://twitter.com/" target="_blank">
                <i className="fab fa-twitter hover:scale-105 hover:text-merah duration-300"></i>
              </Link>

              <Link href="https://www.youtube.com/" target="_blank">
                <i className="fab fa-youtube hover:scale-105 hover:text-merah duration-300"></i>
              </Link>

              <Link href="https://github.com/" target="_blank">
                <i className="fab fa-github hover:scale-105 hover:text-merah duration-300"></i>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
