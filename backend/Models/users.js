

const mongoose=require("mongoose")

const Userschema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})

const UserModel=mongoose.model('users',Userschema)
module.exports= UserModel;