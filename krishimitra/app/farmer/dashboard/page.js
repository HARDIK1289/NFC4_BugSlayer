import Link from "next/link";
import BlurText from "@/app/components/BlurText";
// Importing icons, including the new 'Users' icon for consultations
import { Leaf, Bot, Newspaper, ShoppingCart, Users } from "lucide-react";
import TextType from "@/app/components/TextType";

export default function FarmerDashboardPage() {
  // The 'features' array is now updated.
  // "Crop Prediction" is removed to be featured separately.
  // "Book Consultations" is added.
  const features = [
    {
      icon: <Leaf size={40} className="text-green-600" />,
      title: "Crop Prediction",
      description:
        "Upload a photo of your crop's leaf, and our advanced AI will instantly identify potential diseases. Get early warnings and accurate diagnoses to protect your harvest and prevent losses before they spread.",
      href: "/farmer/dashboard/predict",
    },
    {
      icon: <Bot size={40} className="text-blue-600" />,
      title: "AI Saarthi",
      description:
        "Your personal AI farming assistant. Ask any question in your own language, from soil health to weather patterns, and get instant, reliable answers 24/7.",
      href: "/farmer/dashboard/ai-saarthi",
    },
    {
      icon: <Users size={40} className="text-purple-600" />,
      title: "Book Consultations",
      description:
        "Need a human touch? Connect directly with verified agricultural experts for personalized advice. Schedule a video or phone consultation at your convenience.",
      href: "/farmer/dashboard/consultations",
    },
    {
      icon: <Newspaper size={40} className="text-orange-600" />,
      title: "Krishi Samachaar",
      description:
        "Stay updated with the latest news, government schemes, and mandi prices. Knowledge is power, and we bring it directly to you daily.",
      href: "/farmer/dashboard/samachaar",
    },
    {
      icon: <ShoppingCart size={40} className="text-red-600" />,
      title: "Explore Products",
      description:
        "Browse a curated marketplace of high-quality seeds, fertilizers, and farming equipment recommended by experts to improve your farm's productivity.",
      href: "/farmer/dashboard/products",
    },
  ];

  // Array to hold FAQ data remains the same
  const faqs = [
    {
      question: "How accurate is the Crop Prediction feature?",
      answer:
        "Our AI model is trained on millions of images and provides highly accurate preliminary diagnoses. For best results, upload a clear, well-lit photo of the affected leaf against a plain background.",
    },
    {
      question: "Can I use AI Saarthi in my local language?",
      answer:
        "Yes! AI Saarthi is designed to understand and respond in multiple Indian languages. You can ask questions in the language you are most comfortable with, making it a true farming companion.",
    },
    {
      question: "How do I book a consultation with an expert?",
      answer:
        "Simply go to the 'Book Consultations' section, choose an expert based on their specialty and availability, and select a time slot that works for you. You'll receive a confirmation and a link for your session.",
    },
    {
      question: "Are the products in the marketplace reliable?",
      answer:
        "Absolutely. We partner with trusted and verified suppliers to ensure all products, from seeds to equipment, meet high-quality standards. Our goal is to provide you with reliable and effective solutions.",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <header
        className="relative flex h-screen items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(/farmimage1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-4xl px-4">

          <TextType
            text={["Namaste Kisaan! 🙏🏻"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className=" md:text-7xl text-5xl font-bold"
          />

          <BlurText
            text="Kya Aapki fasal surakshit hai? Turant rog jaankari paaiye. 🔎"
            delay={200}
            animateBy="words"
            direction="top"

            className="text-2xl mb-8"
          />
        </div>
      </header>

      {/* --- UPDATED: Features Section --- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Core Features
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Everything you need to make farming simpler and more profitable.
            </p>
          </div>

          {/* --- NEW: Large USP Feature Card --- */}
          <div className="mt-16 overflow-hidden rounded-2xl bg-gray-50 shadow-xl ring-1 ring-gray-200">
            <div className="flex flex-col items-center gap-12 p-8 lg:flex-row lg:p-12">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-green-700">
                  Rog Pehchaan: Instant Disease Detection
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  Our most powerful feature uses cutting-edge Artificial
                  Intelligence to protect your crops. Simply take a photo of an
                  affected leaf, and our AI model will analyze it in seconds to
                  identify the disease. You get an instant report with the
                  disease name, symptoms, and recommended remedies.
                </p>
                <Link
                  href="/farmer/dashboard/predict"
                  className="mt-8 inline-block rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-3 font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                >
                  Upload Image Now
                </Link>
              </div>
              <div className="flex flex-shrink-0 items-center justify-center rounded-full bg-green-100 p-8">
                <Leaf size={80} className="text-green-600" />
              </div>
            </div>
          </div>

          {/* --- Updated Feature Cards Grid --- */}
          <div className="mt-20 flex flex-wrap justify-center gap-8">
            {features.map((feature) => (
              <Link
                href={feature.href}
                key={feature.title}
                // 2. Add width classes to the card itself
                className="block rounded-xl bg-gray-50 p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-5/12 lg:w-[30%]"
              >
                <div className="flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900 text-center">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base text-gray-600 text-center">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-16">
            <dl className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-x-12">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-lg bg-white p-6 shadow-md"
                >
                  <dt className="text-lg font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
