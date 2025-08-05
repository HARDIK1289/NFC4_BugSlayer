"use client";
import { useState } from "react";

export default function AppointmentPage() {
  const advisors = ["Dr. Sharma", "Mr. Patel", "Ms. Rani"];
  const [formData, setFormData] = useState({
    advisorName: "",
    farmerName: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/farmer/book", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      alert("Appointment booked successfully!");
      setFormData({
        advisorName: "",
        farmerName: "",
        date: "",
        time: "",
        reason: "",
      });
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Advisor Board</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-gray-700">Available Advisors</h3>
          <ul className="space-y-2">
            {advisors.map((advisor, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                <span className="text-gray-700">{advisor}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-2xl font-semibold text-green-800 mb-4">Book an Appointment</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Advisor</label>
            <select
              name="advisorName"
              value={formData.advisorName}
              onChange={handleChange}
              className="placeholder-gray-500 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              required
            >
              <option value="">-- Select an advisor --</option>
              {advisors.map((advisor, idx) => (
                <option key={idx} value={advisor}>
                  {advisor}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="farmerName"
              placeholder="Enter your full name"
              value={formData.farmerName}
              onChange={handleChange}
              className="placeholder-gray-500 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 placeholder-gray-500">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="placeholder-gray-500 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 ">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className=" placeholder-gray-500 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Appointment</label>
            <textarea
              name="reason"
              placeholder="Describe your reason for the appointment"
              value={formData.reason}
              onChange={handleChange}
              className=" placeholder-gray-500 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition font-medium shadow-sm"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}