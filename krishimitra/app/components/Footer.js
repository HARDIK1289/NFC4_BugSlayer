import Link from "next/link";
import Image from "next/image";
// Import social icons from the library we just installed
import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand and Mission */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/solologo.jpg"
                alt="KrishiMitra Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-2xl font-bold text-white">KrishiMitra</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Empowering Indian farmers with AI-driven solutions for better crop
              health, increased yield, and sustainable agriculture.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-md font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/farmer/dashboard/predict"
                  className="hover:text-white transition-colors"
                >
                  Crop Prediction
                </Link>
              </li>
              <li>
                <Link
                  href="/farmer/dashboard/ai-saarthi"
                  className="hover:text-white transition-colors"
                >
                  AI Saarthi
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/farmer/dashboard#faqs"
                  className="hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-md font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm">123 Krishi Marg, Tech Park</li>
              <li className="text-sm">Mumbai, Maharashtra 400001</li>
              <li className="mt-4">
                <a
                  href="mailto:support@krishimitra.com"
                  className="hover:text-white transition-colors"
                >
                  support@krishimitra.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="text-md font-semibold text-white">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin size={24} />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="sr-only">X</span>
                <FaXTwitter size={24} />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <FaInstagram size={24} />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="sr-only">Discord</span>
                <FaDiscord size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gray-700 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} KrishiMitra. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
