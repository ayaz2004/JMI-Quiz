import React from "react";
import Image from "next/image";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

function Navbar(props) {
  return (
    <nav className="poppins mx-auto max-w-screen-xl p-4 sm:px-8 sm:py-5 lg:px-10">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <a className="flex gap-1 items-center">
            <Image src="/jmi-quiz.jpg" alt="" width={60} height={60} />
            <h2 className="text-2xl font-bold flex gap-2">
              JMI
              <span className="text-green-700">Quiz</span>
            </h2>
          </a>
        </div>
        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
          <buttton type="button">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton className="block rounded-lg bg-green-700 px-7 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring" />
            </SignedOut>
          </buttton>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
