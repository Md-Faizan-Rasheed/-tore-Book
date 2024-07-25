
import User from "../models/user.models.js"
import bcryptjs from "bcryptjs"


export const signup = async(req,res) =>{

    try {
        const {email,password,fullname} = req.body;

        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User Already Exits"})
        }


        const hashedPassword = await bcryptjs.hash(password,10)
           console.log("Haashedd padssee"+hashedPassword);
        const createdUser = new User({
            fullname,
            email,
            password:hashedPassword,
        })

        console.log(createdUser);

       await createdUser.save()
        res.status(201).json({message:"User created Successfully",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email,
        }})
       

    } catch (error) {
         console.log("Error"+ error.message);
         res.status(500).json({message:"Internal server error"});
    }


}


export const login = async(req,res) =>{

    try {
        const {email,password} = req.body;

        const user = await User.findOne({email});

        const isMatch =await bcryptjs.compare(password,user.password);
        console.log("Password",password);
        if(!user || !isMatch){
            return res.status(400).json({message:"Credentails in not correct"});
           }
           else{
            res.status(200).json({message:"Login Sucessfully",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email,
            }})
           }

    } catch (error) {
        console.log("Error"+error.message);

        res.status(500).json({message:"Internal Server error"});

    }
}