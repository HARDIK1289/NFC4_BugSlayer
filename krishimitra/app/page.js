// app/page.js

import Image from "next/image";
import Link from "next/link";
// NEW: Importing icons from the library we just installed
import { User, Wheat } from "lucide-react";
import GoogleTranslate from "./components/GoogleTranslate";

export default function LandingPage() {
  return (
    <div className="landing-container-bg flex min-h-screen flex-col bg-cover bg-center text-white">
      <GoogleTranslate/>
      <header className="flex justify-end p-6">
        <div className="flex items-center gap-4">
        </div>
      </header>

      {/* Main content now uses animation classes from globals.css */}
      <main className="flex flex-grow flex-col items-center justify-center p-4 text-center">
        <img
          src="/solologo.jpg"
          alt="Paddy crop"
          className="animate-fade-in-up-1 h-36 w-36 rounded-full border-4 border-white object-cover shadow-xl"
        />


        <h1 className="text-shadow-lg animate-fade-in-up-2 mt-6 text-5xl font-bold md:text-7xl">
          KrishiMitra
        </h1>

        <p className="text-shadow animate-fade-in-up-2 mt-4 max-w-xl text-lg md:text-xl">
          Your AI-Powered Farming Friend!
        </p>

        {/* NEW: Buttons are now links and have icons and improved hover effects */}
        <div className="animate-fade-in-up-3 mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/farmer/signup"
            className="flex items-center rounded-lg bg-green-600 px-8 py-3 font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/40"
          >
            <Wheat className="mr-2 h-5 w-5" />
            You are a Farmer
          </Link>
          <Link
            href="/expert/signup"
            className="flex items-center rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/40"
          >
            <User className="mr-2 h-5 w-5" />
            You are a Farm Expert
          </Link>
        </div>
      </main>
    </div>
  );
}
