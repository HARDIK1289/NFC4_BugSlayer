import { connectDB } from "@/lib/connectDB";
import Appointment from "@/models/Appointment";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();

    const appointment = new Appointment(data);
    await appointment.save();

    return NextResponse.json({ success: true, appointment });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
