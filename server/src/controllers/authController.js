import admin from  "../DBSchema/auth/adminDB.js"

async function admincontroller(req,res){
    const  {name, password } = req.body
    try {
            const data = await admin.findOne({name})
            if (data){
                if (data.password === password){
                        res.status(200).json({
                               ok : "id matched" 
                        })
                }
            else {
                res.status(404).json("somthing went wrong")
            }
            }

    }
    catch(error){
            console.log("somthing went wrong",error)
    }
}

export default admincontroller
