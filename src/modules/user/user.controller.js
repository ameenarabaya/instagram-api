import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userModel from '../../../DB/models/userModel.js';

export const register = async(req,res)=>{
    try{
        let {userName,email,password} = req.body;
        const hashPassword  = await bcrypt.hash(password,8);
        const user = await userModel.create({userName, email, password:hashPassword});
        // generate token for the new user
        const token = jwt.sign({_id : user._id},"LOGIN");
        return res.json({massage:"success",token :token});
    } catch(error){
        return res.json(error.stack);
    }
}
export const login = async(req,res)=>{
  
        let {email,password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({message:"invalid email"});
        }
       const check = bcrypt.compare(password,user.password);
       if(!check){
        return res.json({message:"invalid password"});
       } 
return res.json({message:"success",user});
}

export const updateUser = async(req,res)=>{
    try{
        let {token} = req.headers;
        const decode =  jwt.verify(token,"LOGIN");
        const id = decode._id
        let {userName,bio,status} = req.body;
        const user = await userModel.findByIdAndUpdate({_id:id},{userName,bio,status},{new:true});
        return res.json({message:"success"});
    } catch(error){
        return res.json(error.stack)
    }
}

export const deleteUser = async(req,res)=>{
    try{
        let {token} = req.headers;
        const decode =  jwt.verify(token,"LOGIN");
        const id = decode._id
        const user = await userModel.findByIdAndDelete({_id:id});
        return res.json({message:"success"});
    } catch(error){
        return res.json (error.stack)
    }
  }
  export const getAllUser = async(req,res)=>{
    let  users = await userModel.find().populate('posts');
    return res.json({users:users});
  }