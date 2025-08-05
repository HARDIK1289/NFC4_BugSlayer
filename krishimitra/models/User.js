import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  aadhar: { type: String, required: true, unique: true },  // ✅ changed from Number
  number: { type: String, required: true, unique: true },  // ✅ changed from Number
  location: { type: String, required: true },
  soiltype: { type: String, required: true },
  password: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", UserSchema);
