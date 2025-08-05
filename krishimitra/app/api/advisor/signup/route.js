import { connectDB } from "@/lib/connectDB";
import Advisor from "@/models/Advisor";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, email, education, area, experience,password } = body;

    if (!password || !email) {
      return NextResponse.json({ message: "Name and Email are required." }, { status: 400 });
    }

    // Check if advisor already exists
    const existingAdvisor = await Advisor.findOne({ email });
    if (existingAdvisor) {
      return NextResponse.json({ message: "Advisor with this email already exists." }, { status: 409 });
    }

    // Create advisor
    const newAdvisor = new Advisor({
      name,
      email,
      education,
      area,
      experience,
      password,
    });

    await newAdvisor.save();

    return NextResponse.json({ message: "Advisor registered successfully!" }, { status: 201 });
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json({ message: "Server Error", error: err.message }, { status: 500 });
  }
}
