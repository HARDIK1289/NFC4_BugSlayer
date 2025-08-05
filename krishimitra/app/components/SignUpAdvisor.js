"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, BrainCircuit } from "lucide-react";
import { useRouter } from "next/navigation";

const SignUpAdvisor = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: "",
    area: "",
    experience: "",
    password: "",
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

    try {
      const res = await fetch("/api/advisor/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      setSuccess("Successfully registered as an Advisor! Please log in.");
      setFormData({
        name: "",
        email: "",
        education: "",
        area: "",
        experience: "",
        password: "",
      });

      setTimeout(() => router.push("/expert/dashboard"), 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center">
            <BrainCircuit className="mr-2" /> Farm Expert Registration
          </h2>
          <p className="text-gray-500">Create your account to join our community.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputField icon={<User />} name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
          <InputField icon={<User />} name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
          <InputField icon={<BrainCircuit />} name="education" placeholder="Education (e.g., B.Sc Agri)" value={formData.education} onChange={handleChange} />
          <InputField icon={<BrainCircuit />} name="area" placeholder="Area of Expertise (e.g., Soil Science)" value={formData.area} onChange={handleChange} />
          <InputField icon={<BrainCircuit />} name="experience" placeholder="Experience in years" value={formData.experience} onChange={handleChange} type="number" />
          <InputField
            icon={<User />}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            type="password"
          />


          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && <p className="text-green-500 text-sm text-center">{success}</p>}

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
            Create Account
          </button>
        </form>

        <p className="mt-8 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/expert/login" className="text-blue-600 hover:underline font-semibold">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

const InputField = ({ icon, type = "text", name, placeholder, onChange, value }) => (
  <div className="relative">
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">{icon}</div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      required
      onChange={onChange}
      className="placeholder-black text-black w-full pl-10 pr-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default SignUpAdvisor;
