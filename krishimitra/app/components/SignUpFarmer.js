"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, KeyRound, Wheat, Phone } from "lucide-react";
import { FcDocument } from "react-icons/fc";
import { useRouter } from "next/navigation";
const SignUpFarmer = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    aadhar: "",
    number: "",            // ✅ renamed from phone
    location: "",
    soiltype: "",          // ✅ renamed from soilType
    password: "",
    confirmPassword: "",   // ✅ added confirmPassword
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    try {
      const res = await fetch("/api/farmer/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setSuccess("Successfully registered as a Farmer! Please log in.");
      router.push("/farmer/dashboard")
      
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center">
            <Wheat className="mr-2" /> Farmer Registration
          </h2>
          <p className="text-gray-500">Create your account to join our community.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputField icon={<User />} name="name" placeholder="Full Name" onChange={handleChange} />
          <InputField icon={<Phone />} name="number" placeholder="Phone Number" onChange={handleChange} />
          <InputField icon={<Wheat />} name="location" placeholder="Farm Location (e.g., City, State)" onChange={handleChange} />
          <InputField icon={<FcDocument />} name="aadhar" placeholder="Aadhar Number" onChange={handleChange} />
          <InputField icon={<User />} name="email" placeholder="Email" onChange={handleChange} />

          <div className="relative">
            <Wheat className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={20} />
            <select
              name="soiltype"
              required
              onChange={handleChange}
              className="text-black w-full pl-10 pr-4 py-2 border border-gray-500 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Soil Type</option>
              <option value="Alluvial">Alluvial</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="Laterite">Laterite</option>
              <option value="Mountain">Mountain</option>
              <option value="Desert">Desert</option>
              <option value="Peaty">Peaty</option>
              <option value="Saline">Saline</option>
            </select>
          </div>

          <InputField icon={<KeyRound />} type="password" name="password" placeholder="Password (min 8 characters)" onChange={handleChange} />
          <InputField icon={<KeyRound />} type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && <p className="text-green-500 text-sm text-center">{success}</p>}

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
            Create Account
          </button>
        </form>

        <p className="mt-8 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/farmer/login" className="text-blue-600 hover:underline font-semibold">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

const InputField = ({ icon, type = "text", name, placeholder, onChange }) => (
  <div className="relative">
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">{icon}</div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required
      onChange={onChange}
      className="placeholder-black text-black w-full pl-10 pr-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default SignUpFarmer;
