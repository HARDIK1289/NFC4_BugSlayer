import mongoose from "mongoose";

const AdvisorSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  area: String,
  education: String,
  experience: Number,
  password: String,
});

export default mongoose.models.Advisor || mongoose.model("Advisor", AdvisorSchema);
