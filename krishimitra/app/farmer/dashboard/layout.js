import FarmerNavbar from "@/app/components/FarmerNavbar";
// 1. Import the new Footer component
import Footer from "@/app/components/Footer";

export default function FarmerLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <FarmerNavbar />
      <main className="flex-grow">{children}</main>

      {/* 2. Remove the old footer and use the new component */}
      <Footer />
    </div>
  );
}
