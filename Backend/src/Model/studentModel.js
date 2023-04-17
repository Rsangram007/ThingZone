const mongoose=require("mongoose")


const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    clssname:{
        type:Number,
        enum:[1,2,3,4,5]
    },
    Gender:{
        type:String,
        enum:["male","Female"]
    }
},{timestamp:true})

module.exports=mongoose.model("master_students",studentSchema)