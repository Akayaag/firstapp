const mongoose=require("mongoose")
const url=process.env.MONGO_URL;

mongoose.connect(url)
.then(()=>{
    console.log("database connected")
}).catch((err)=>{
    console.log("connection error",err)
})
