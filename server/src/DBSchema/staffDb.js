import mongoose from "mongoose";
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },
  qualification: {
    type: String, // e.g. "M.Sc. Mathematics, B.Ed"
  },
  designation: {
    type: String, // e.g. "Teacher", "Librarian", "Accountant"
    required: true,
  },
  department: {
    type: String, // e.g. "Mathematics", "Administration"
  },
  joiningDate: {
    type: Date,
    default: Date.now,
  },
  contactNumber: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
  },
  emergencyContact: {
    name: String,
    relation: String,
    phone: String,
  },
  salary: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["active", "on-leave", "resigned", "retired"],
    default: "active",
  },
}, { timestamps: true });

export default mongoose.model("Staff", StaffSchema);
