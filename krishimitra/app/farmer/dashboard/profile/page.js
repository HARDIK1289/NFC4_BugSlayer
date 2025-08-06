"use client";
import React from "react";

const FarmerProfile = () => {
  // Hardcoded farmer data with India-specific values
  const farmer = {
    name: "Rajesh Kumar Yadav",
    email: "farmer.rajesh@example.in",
    aadhar: "1234 5678 9012",
    number: "+91 9876543210",
    location: "Barabanki, Uttar Pradesh",
    soilType: "Alluvial Soil",
    landSize: "2.5 acres",
    mainCrops: "Wheat, Mustard",
    irrigation: "Tube well",
    farmingExperience: "15 years",
    kisanCard: "Active",
    soilHealthCard: "Valid until 2025"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-8 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <h1 className="text-3xl font-bold text-green-800">KrishiMitra</h1>
          </div>
          <p className="text-lg text-gray-600">Your Farming Profile</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-5">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-white">{farmer.name}</h2>
                <p className="text-green-100 text-sm mt-1">Active member since 2018</p>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProfileField label="Email Address" value={farmer.email} icon="mail" />
            <ProfileField label="Aadhar Number" value={farmer.aadhar} icon="id-card" />
            <ProfileField label="Mobile Number" value={farmer.number} icon="phone" />
            <ProfileField label="Location" value={farmer.location} icon="location" />
            <ProfileField label="Soil Type" value={farmer.soilType} icon="soil" />
            <ProfileField label="Land Holding" value={farmer.landSize} icon="land" />
            <ProfileField label="Main Crops" value={farmer.mainCrops} icon="crops" />
            <ProfileField label="Irrigation" value={farmer.irrigation} icon="water" />
            <ProfileField label="Farming Experience" value={farmer.farmingExperience} icon="experience" />
            <ProfileField label="Kisan Credit Card" value={farmer.kisanCard} icon="card" />
            <ProfileField label="Soil Health Card" value={farmer.soilHealthCard} icon="health" />
          </div>
        </div>

        {/* Government Schemes Section */}
        <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden border border-green-100">
          <div className="bg-green-600 px-6 py-3">
            <h3 className="text-lg font-semibold text-white">Government Schemes</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <SchemeCard 
                title="PM-KISAN" 
                status="Active" 
                amount="₹6,000/year" 
                icon="rupee" 
              />
              <SchemeCard 
                title="Soil Health" 
                status="Valid" 
                amount="Free Testing" 
                icon="health" 
              />
              <SchemeCard 
                title="Fasal Bima" 
                status="Eligible" 
                amount="1.5% Premium" 
                icon="insurance" 
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium shadow-md flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Edit Profile
          </button>
          <button className="px-6 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
            Download Documents
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Profile Field Component
const ProfileField = ({ label, value, icon }) => {
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'mail':
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>;
      case 'phone':
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>;
      case 'location':
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>;
      // Add more icons as needed
      default:
        return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>;
    }
  };

  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mt-1">
        {getIcon(icon)}
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-gray-500">{label}</h3>
        <p className="mt-1 text-sm font-medium text-gray-900">{value}</p>
      </div>
    </div>
  );
};

// Government Scheme Card Component
const SchemeCard = ({ title, status, amount, icon }) => {
  const statusColor = status === 'Active' ? 'bg-green-100 text-green-800' : 
                     status === 'Eligible' ? 'bg-blue-100 text-blue-800' : 
                     'bg-yellow-100 text-yellow-800';

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
      <div className="flex items-center mb-2">
        <div className="bg-green-100 p-2 rounded-full mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        </div>
        <h4 className="font-medium text-gray-900">{title}</h4>
      </div>
      <div className="flex justify-between items-center mt-3">
        <span className={`text-xs px-2 py-1 rounded-full ${statusColor}`}>{status}</span>
        <span className="text-sm font-medium text-gray-700">{amount}</span>
      </div>
    </div>
  );
};

export default FarmerProfile;