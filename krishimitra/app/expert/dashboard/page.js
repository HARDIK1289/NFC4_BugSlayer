import Link from "next/link";

export default function ExpertDashboardPage() {
  return (
    <header className="relative flex h-screen items-center justify-center bg-blue-50 text-center text-gray-800">
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-5xl font-bold text-blue-800 md:text-6xl">
          Expert Dashboard
        </h1>
        <p className="mt-4 text-lg text-gray-600 md:text-xl">
          Thank you for your contribution. View pending farmer requests and
          share your knowledge.
        </p>
        <Link
          href="/expert/dashboard/consultations"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-blue-700"
        >
          View Requests
        </Link>
      </div>
    </header>
  );
}
