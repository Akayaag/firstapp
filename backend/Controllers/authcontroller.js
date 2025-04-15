const UserModel=require('../Models/users')
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const signup= async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const user= await UserModel.findOne({email})
        if(user){
            return res.status(409)
            .json({message:'user is alreasy exist logi plz'})
        }
        const userModel= new UserModel({name,email,password});
        userModel.password=await bcrypt.hash(password,10);
        await userModel.save();
        res.status(201)
        .json({msg:"signup successfull",
            success: true
        })

    }
    catch(err){
        res.status(500)
        .json({msg:"internal server error",
            success: false
        })

    }
}
const login= async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user= await UserModel.findOne({email})
        if(!user){
            return res.status(500)
            .json({message:'auth failed wrong crendentials', success: false})
        }
        const isequal=bcrypt.compare(password,user.password);
        if(!isequal){
            return res.status(500)
            .json({message:'auth failed wrong crendentials', success: false})

        }
        const jwtToken =jwt.sign({email:user.email,_id:user.id},process.env.JWT_SECRET,
            {expiresIn:"24h"}
        )
       
        res.status(200)
        .json({msg:"login successfull",
            success: true,
            jwtToken,
            email,
        })

    }
    catch(err){
        res.status(500)
        .json({msg:"internal server error",
            success: false
        })

    }
}

const products=async(req,res)=>{

    res.status(200).json({
        msg:"helloaby"
    })

}

module.exports={
    signup,login,products
}