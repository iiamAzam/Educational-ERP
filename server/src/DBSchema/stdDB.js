import mongoose from "mongoose";
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  admissionNumber: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },
  religion: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    sparse: true, // some students may not have email
  },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
  },
  parentContact: {
    fatherPhone: String,
    motherPhone: String,
  },
  class: {
    type: String, // e.g. "10-A"
  },
  section: {
    type: String,
  },
  rollNumber: {
    type: Number,
  },
  dateOfAdmission: {
    type: Date,
    default: Date.now,
  },
  bloodGroup: {
    type: String,
  },
  emergencyContact: {
    name: String,
    relation: String,
    phone: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive", "alumni"],
    default: "active",
  },
}, { timestamps: true });

export default mongoose.model("Student", StudentSchema);
