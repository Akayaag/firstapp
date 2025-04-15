const express =require('express')
const app = express()
const bodyparser=require("body-parser")
const cors=require('cors')
require("dotenv").config()
require('./Models/db')
const Authroute=require('./Routes/Authrouter')
const ProductRouter=require('./Routes/ProductRouter')
const PORT=process.env.PORT||3000;



app.get('/hi',(req,res)=>{
    res.send("pong")
})

app.use(bodyparser.json());
app.use(cors());
app.use('/auth',Authroute)
app.use('/products', ProductRouter);






app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
