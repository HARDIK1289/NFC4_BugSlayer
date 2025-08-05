import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  advisorName: String,
  farmerName: String,
  date: String,
  time: String,
  reason: String,
});

export default mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);
