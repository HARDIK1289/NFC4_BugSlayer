import Link from "next/link";
import Image from "next/image";
// 1. Import a relevant icon for the button
import { ScanLine } from "lucide-react";

export default function FarmerNavbar() {
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between bg-white p-4 px-8 shadow-md">
      {/* Left side: Logo and main navigation links are grouped together */}
      <div className="flex items-center gap-10 ml-36">
        {/* Logo and Brand Name */}
        <Link href="/farmer/dashboard" className="flex items-center gap-3">
          <Image
            src="/solologo.jpg"
            alt="KrishiMitra Logo"
            width={40}
            height={40}
          />
          <span className="text-2xl font-bold text-green-700">KrishiMitra</span>
        </Link>

        {/* Main Navigation Links */}
        <div className="flex items-center gap-4">
          <Link
            href="/farmer/dashboard/predict"
            className="font-semibold text-gray-600 transition hover:text-green-700"
          >
            Crop Prediction
          </Link>
          <Link
            href="/farmer/dashboard/ai-saarthi"
            className="font-semibold text-gray-600 transition hover:text-green-700"
          >
            AI Saarthi
          </Link>
          <Link
            href="/farmer/dashboard/samachaar" // Changed href to be more specific
            className="font-semibold text-gray-600 transition hover:text-green-700"
          >
            Krishi Samachaar
          </Link>
          <Link
            href="/farmer/dashboard/products" // Changed href to be more specific
            className="font-semibold text-gray-600 transition hover:text-green-700"
          >
            Explore Products
          </Link>
          <Link
            href="/farmer/dashboard/products" // Changed href to be more specific
            className="font-semibold text-gray-600 transition hover:text-green-700"
          >
            Book Consultation
          </Link>
        </div>
      </div>

      {/* --- THIS IS THE UPDATED SECTION --- */}
      <div className="flex items-center gap-6">
        {/* The new "Rog Pehchaan" button */}
        <Link
          href="/farmer/dashboard/predict" // Assuming this is the correct link
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-5 py-2.5 font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:from-green-600 hover:to-green-700 hover:shadow-xl"
        >
          <ScanLine size={20} />
          Rog Pehchaan
        </Link>

        {/* My Profile link remains the same */}
        <Link
          href="/farmer/dashboard/my-profile" // Changed href to be more specific
          className="font-semibold text-gray-600 transition hover:text-green-700"
        >
          My Profile
        </Link>
      </div>
    </nav>
  );
}
