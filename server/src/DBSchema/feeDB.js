import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MasterFeeSchema = new Schema({
  academicYear: {
    type: String, // e.g. "2024-2025"
    required: true,
  },
  class: {
    type: String, // e.g. "10th Grade"
    required: true,
  },
  term: {
    type: String, // e.g. "Term 1", "Annual"
    required: true,
  },
  feeComponents: [
    {
      name: { type: String, required: true }, // e.g. "Tuition Fee"
      amount: { type: Number, required: true },
    },
  ],
}, { timestamps: true });

export default mongoose.model("MasterFee", MasterFeeSchema);



