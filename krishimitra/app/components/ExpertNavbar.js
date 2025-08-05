import Link from "next/link";
import Image from "next/image";

export default function ExpertNavbar() {
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between bg-white p-4 px-8 shadow-md">
      <Link href="/expert/dashboard" className="flex items-center gap-3">
        <Image
          src="/solologo.jpg"
          alt="KrishiMitra Logo"
          width={40}
          height={40}
        />
        <span className="text-2xl font-bold text-blue-700">
          KrishiMitra (Expert)
        </span>
      </Link>
      <div className="flex items-center gap-6">
        <Link
          href="/expert/dashboard/consultations"
          className="font-semibold text-gray-600 transition hover:text-blue-700"
        >
          Consultations
        </Link>
        <Link
          href="/expert/dashboard/my-profile"
          className="font-semibold text-gray-600 transition hover:text-blue-700"
        >
          My Profile
        </Link>
        <Link
          href="/"
          className="font-semibold text-gray-600 transition hover:text-blue-700"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
}
