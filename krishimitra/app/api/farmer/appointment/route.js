import { connectDB } from "@/lib/connectDB";
import Appointment from "@/models/Appointment";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  const { advisorName } = await req.json();

  try {
    const appointments = await Appointment.find({ advisorName });
    return NextResponse.json({ success: true, appointments });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
