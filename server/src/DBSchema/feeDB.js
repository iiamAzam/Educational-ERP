import mongoose from "mongoose";
import stdDB from "./stdDB";
const Schema = mongoose.Schema;

const MasterFeeSchema = new Schema({
  student : {
      type : mongoose.Schema.Types.ObjectId,
      ref : stdDB
  },
  academicYear: {
    type: String, // e.g. "2024-2025"
    required: true,
  },
  Branch:{
    type : String,
    required:true
  },
  class: {
    type: String,
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
      paidamount:{
          type:Number,
      },
      pending: { 
        type:Number,
        
      }
    },
  ],

}, { timestamps: true });

export default mongoose.model("MasterFee", MasterFeeSchema);                    



