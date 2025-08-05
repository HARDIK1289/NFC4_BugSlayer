import { connectDB } from "@/lib/connectDB";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    console.log("✅ Connected to MongoDB");

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return NextResponse.json(
        {
          success: false,
          exists: false,
          message: "User doesn't exist. Try signing up instead.",
        },
        { status: 404 }
      );
    }

    if (existingUser.password !== password) {
      return NextResponse.json(
        {
          success: false,
          exists: true,
          message: "Incorrect password",
        },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      exists: true,
      message: "Welcome, login successful!",
      user: {
        name: existingUser.name,
        email: existingUser.email,
      },
    });
  } catch (error) {
    console.error("❌ Error in login:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
