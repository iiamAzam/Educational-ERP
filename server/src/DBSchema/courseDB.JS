import mongoose from "mongoose"
const schema  = mongoose.schema
const courscategory = {
    UG:["BPT","BSCNURSING"],
    PARAMEDICAL:["DMLT","DMIT","DOT","DOT & AT","DDT"]
                        }
const CourseModel = new schema({
            category : {
                type : String,
                enum : Object.keys(courscategory)
            },
            course : {
                type: String,
                enum:[
                    courscategory.UG,
                    courscategory.PARAMEDICAL
                ]
            }
})
CourseModel.pre("save", (next)=>{
        if (this.category==="UG"&& !courscategory.UG.includes(this.course)){
            return next(new Error("invalid course for ug category"))
        }
        if(this.category==="PARAMEDICAL" && !CourseModel.PARAMEDICAL.includes(this.course)){
            return next(new Error("invalid course for ug category"))
        }
        next()
})



export default mongoose.model("coursemodel", CourseModel)