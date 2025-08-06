'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function IndianFarmingNews() {
  const [newsItems, setNewsItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);



const farmingNews = [
    {
      id: 1,
      title: "PM Kisan Samman Nidhi Yojana Extended",
      description: "Government extends PM Kisan scheme to provide ₹6,000 annual financial support to all farmer families.",
      category: "Government Scheme",
      date: "March 2025"
    },
    {
      id: 2,
      title: "Record Wheat Production in Punjab",
      description: "Punjab reports record wheat production of 18.5 million tonnes despite climate challenges.",
      category: "Production",
      date: "April 2025"
    },
    {
      id: 3,
      title: "New Soil Health Card Initiative",
      description: "Government launches updated Soil Health Card scheme with digital tracking for 50 million farmers.",
      category: "Government Scheme",
      date: "February 2025"
    },
    {
      id: 4,
      title: "Organic Farming Gains Popularity in Kerala",
      description: "Kerala farmers shifting to organic methods, with 25% increase in certified organic farms this year.",
      category: "Trends",
      date: "May 2025"
    },
    {
      id: 5,
      title: "e-NAM Trading Volume Crosses ₹2 Lakh Crore",
      description: "Electronic National Agriculture Market records ₹2.3 lakh crore trade volume benefiting 1.7 crore farmers.",
      category: "Market",
      date: "April 2025"
    },
    {
      id: 6,
      title: "Kisan Credit Card Limit Increased",
      description: "RBI increases Kisan Credit Card limit to ₹3 lakh at 4% interest for animal husbandry and fisheries.",
      category: "Government Scheme",
      date: "January 2025"
    },
    {
      id: 7,
      title: "Drought Affects Maharashtra Cotton Farmers",
      description: "Irregular monsoon impacts cotton yield in Vidarbha region, government announces relief package.",
      category: "Weather",
      date: "June 2025"
    },
    {
      id: 8,
      title: "MSP for Rabi Crops Increased",
      description: "Cabinet approves 5-7% increase in Minimum Support Price for wheat, mustard, and other rabi crops.",
      category: "Government Scheme",
      date: "May 2023"
    },
    {
      id: 9,
      title: "Vertical Farming Startups Raise $50M",
      description: "Indian agri-tech startups specializing in vertical farming attract significant venture capital funding.",
      category: "Technology",
      date: "May 2025"
    },
    {
      id: 10,
      title: "Pradhan Mantri Fasal Bima Yojana Updates",
      description: "New features added to crop insurance scheme including faster claim settlement via Aadhaar linkage.",
      category: "Government Scheme",
      date: "March 2025"
    },
    {
      id: 11,
      title: "Sikkim Achieves 100% Organic Farming",
      description: "Sikkim becomes world's first fully organic state, exports to European markets grow by 40%.",
      category: "Achievement",
      date: "April 2025"
    },
    {
      id: 12,
      title: "New Farmer Producer Organizations Launched",
      description: "500 new FPOs established under central scheme to improve farmer bargaining power.",
      category: "Government Scheme",
      date: "February 2025"
    },
    {
      id: 13,
      title: "Drone Technology for Crop Monitoring",
      description: "Government subsidizes drone purchases for farmers to enable precision agriculture techniques.",
      category: "Technology",
      date: "January 2025"
    },
    {
      id: 14,
      title: "Millet Production Sees 30% Growth",
      description: "India's millet production increases significantly following International Year of Millets campaign.",
      category: "Production",
      date: "May 2025"
    },
    {
      id: 15,
      title: "Kisan Rail Expands Network",
      description: "Dedicated freight trains for perishables now connect 250 stations across India, reducing wastage.",
      category: "Infrastructure",
      date: "March 2025"
    },
    {
      id: 16,
      title: "Heavy Rains Disrupt Paddy Sowing in West Bengal",
      description: "Excessive monsoon rains in West Bengal delay paddy sowing operations, with 15% less area covered compared to last year.",
      category: "Weather",
      date: "July 2025"
    }
  ];

  useEffect(() => {
    setNewsItems(shuffleArray([...farmingNews]));
    const interval = setInterval(rotateNews, 30000);
    return () => clearInterval(interval);
  }, []);

  const rotateNews = () => {
    setIsShuffling(true);
    setTimeout(() => {
      setNewsItems(prev => shuffleArray([...prev]));
      setCurrentIndex(0);
      setIsShuffling(false);
    }, 1000);
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const navigateNews = (direction) => {
    setIsShuffling(true);
    setTimeout(() => {
      setCurrentIndex(prev => 
        direction === 'next' 
          ? (prev === newsItems.length - 1 ? 0 : prev + 1)
          : (prev === 0 ? newsItems.length - 1 : prev - 1)
      );
      setIsShuffling(false);
    }, 500);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Government Scheme': 'bg-blue-100 text-blue-800',
      'Production': 'bg-green-100 text-green-800',
      'Technology': 'bg-purple-100 text-purple-800',
      'Market': 'bg-yellow-100 text-yellow-800',
      'Weather': 'bg-cyan-100 text-cyan-800',
      'Trends': 'bg-pink-100 text-pink-800',
      'Achievement': 'bg-orange-100 text-orange-800',
      'Infrastructure': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Enhanced Header with Speaker Animation */}
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center justify-center gap-4">
          <img 
            src="/newgif.gif" 
            width={60} 
            height={60} 
            alt="News Broadcast" 
            className="animate-pulse"
          />
          <h1 className="text-4xl font-bold text-green-800 text-center">
            Krishi Samachar
          </h1>
        </div>
        <p className="text-gray-600 mt-2">Latest updates on Indian agriculture</p>
      </div>

      {/* Featured News Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 border border-gray-100">
        <div className="bg-green-700 text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Today's Featured Update</h2>
          <div className="flex space-x-3">
            <button onClick={() => navigateNews('prev')} className="p-2 rounded-full hover:bg-green-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button onClick={() => navigateNews('next')} className="p-2 rounded-full hover:bg-green-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6">
          {newsItems.length > 0 && (
            <div className={`transition-opacity duration-300 ${isShuffling ? 'opacity-0' : 'opacity-100'}`}>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(newsItems[currentIndex].category)}`}>
                  {newsItems[currentIndex].category}
                </span>
                <span className="text-gray-500 text-sm">{newsItems[currentIndex].date}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                {newsItems[currentIndex].title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {newsItems[currentIndex].description}
              </p>

              {newsItems[currentIndex].category === 'Government Scheme' && (
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-800 mb-3 text-lg">Scheme Highlights:</h4>
                  <ul className="list-disc list-inside text-blue-700 space-y-2 pl-2">
                    <li className="text-base">Eligibility: All small and marginal farmers</li>
                    <li className="text-base">Benefits: Direct financial support/insurance cover</li>
                    <li className="text-base">Application: Through Common Service Centers or online portal</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="px-6 pb-4 flex justify-center gap-2">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsShuffling(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsShuffling(false);
                }, 300);
              }}
              className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-green-600 w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to news ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* All News Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-green-800 mb-8 pb-2 border-b border-green-200">
          All Farming News & Schemes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {farmingNews.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getCategoryColor(item.category)}`}>
                  {item.category}
                </span>
                <span className="text-gray-500 text-sm">{item.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}