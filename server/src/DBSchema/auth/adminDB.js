import mongoose from "mongoose"
const Schema = mongoose.Schema
const AdminRole = new Schema({
        name : {type:String,
                default:"admin"
        },
        password : { type : String }
})
export default  mongoose.model("adminrole", AdminRole)







