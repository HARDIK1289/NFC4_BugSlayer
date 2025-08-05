import ExpertNavbar from "../components/ExpertNavbar";

export default function ExpertLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <ExpertNavbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 p-6 text-center text-white">
        <p>
          &copy; {new Date().getFullYear()} KrishiMitra. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
