"use client";

import React, { useState } from "react";
import Link from "next/link";
// 1. Import the useRouter hook
import { useRouter } from "next/navigation";
import { User, Mail, KeyRound, Wheat, BrainCircuit, Phone } from "lucide-react";

// The form component accepts a 'role' prop
const SignUpForm = ({ role }) => {
  // 2. Initialize the router
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    expertise: "",
  });

  const [error, setError] = useState("");
  // We no longer need the success state, as we are navigating away
  // const [success, setSuccess] = useState("");

  const isFarmer = role === "farmer";
  const title = isFarmer ? "Farmer Registration" : "Farm Expert Registration";
  const icon = isFarmer ? (
    <Wheat className="mr-2" />
  ) : (
    <BrainCircuit className="mr-2" />
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // 3. If validation passes, navigate to the correct dashboard
    console.log("Form Submitted:", { role, ...formData });
    // In a real app, this navigation would happen AFTER your API call is successful.

    if (role === "farmer") {
      router.push("/farmer/dashboard");
    } else {
      router.push("/expert/dashboard");
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center">
            {icon} {title}
          </h2>
          <p className="text-gray-500">
            Create your account to join our community.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* All your input fields remain exactly the same */}
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
              size={20}
            />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <Phone
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
              size={20}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {isFarmer ? (
            <div className="relative">
              <Wheat
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                size={20}
              />
              <input
                type="text"
                name="location"
                placeholder="Farm Location (e.g., City, State)"
                required
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ) : (
            <div className="relative">
              <BrainCircuit
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                size={20}
              />
              <input
                type="text"
                name="expertise"
                placeholder="Area of Expertise (e.g., Soil Science)"
                required
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <div className="relative">
            <KeyRound
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
              size={20}
            />
            <input
              type="password"
              name="password"
              placeholder="Password (min 8 characters)"
              required
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <KeyRound
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
              size={20}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {/* The success message is no longer needed here */}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
          >
            Create Account
          </button>
        </form>

        <p className="mt-8 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:underline font-semibold"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
