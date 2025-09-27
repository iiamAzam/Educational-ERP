import mongoose from "mongoose"
const Schema = mongoose.Schema
const Admission = new Schema({
        name : {type:String,
                default:"admission"
        },
        password : { type : String }
})
export default  mongoose.model("Admission", Admission)







