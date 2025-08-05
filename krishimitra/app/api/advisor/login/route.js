// app/api/expert/login/route.js

import { connectDB } from "@/lib/connectDB";
import Advisor from "@/models/Advisor";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ success: false, message: "Email and Password are required." }, { status: 400 });
    }

    const advisor = await Advisor.findOne({ email });

    if (!advisor) {
      return NextResponse.json({ success: false, message: "Advisor not found. Please register first." }, { status: 404 });
    }

    if (advisor.password !== password) {
      return NextResponse.json({ success: false, message: "Incorrect password." }, { status: 401 });
    }

    return NextResponse.json({
      success: true,
      message: "Login successful!",
      user: advisor,
    }, { status: 200 });

  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ success: false, message: "Server error", error: err.message }, { status: 500 });
  }
}
