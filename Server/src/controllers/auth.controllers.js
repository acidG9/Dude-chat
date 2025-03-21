import User from "../models/user.models.js"
import bcrypt from "bcryptjs"
import { generateToken } from "../library/utils.lib.js"
import cloudinary from "../library/cloudinary.lib.js"

export const login= async (req, res)=>{
    const {email, password}= req.body;

    try {
        const user= await User.findOne({email});

        if(!user){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const passMatch= await bcrypt.compare(password, user.password);

        if(!passMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }

    generateToken(user._id, res);

    res.status(201).json({
        _id: user._id,
        fullname: user.fullName,
        email: user.email,
        profilePic: user.profilePic,
    })

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({message:"Internal server error"});
    }
};

export const signup= async (req, res)=>{
    const {fullName, email, password}= req.body;

    try {
        if(!fullName || !email || !password){
            return res.status(400).json({message:"All fields are required"});
        }

        if(password.length<6){
            return res.status(400).json({message:"Password must not be less than six character"});
        }

        const doesExist= await User.findOne({email});

        if(doesExist){
            return res.status(400).json({message:"Email already exists"});
        }

        const salt= await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password,salt);

        const newUser= new User(
            {
                fullName: fullName,
                email: email,
                password: hashedPassword,
            }
        );

        if(newUser){

            generateToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
            })

        }else{
            res.status(400).json({message:"Invalid user data"});
        }

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({messge:"Internal server error"});
    }
};

export const logout= (req, res)=>{
    try {
        res.cookie("jwt", "", {
            maxAge:0
        });
        res.status(200).json({message:"Logout successfully"});
    } catch (error) {
        console.log("error in logout controller", error.message);
        res.status(500).json({message:"Internal server error"}); 
    }
};

export const profile= async (req, res)=> {
    try {

        const{ profilePic }= req.body;
        const userId= req.user._id;

        if(!profilePic){
            return res.status(400).json({message:"Profile pic is required"});
        }

        const uploadResponse= await cloudinary.uploader.upload(profilePic);

        const updatedUser= await User.findByIdAndUpdate(userId, {profilePic: uploadResponse.secure_url}, {new:true});

        res.status(200).json(updatedUser);
    } catch (error) {
        console.log("error in profile controller", error.message);
        res.status(500).json({message:"Internal server error"});
    }
};

export const check= (req, res)=>{
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log("error in check controller", error.message);
        res.status(500).json({message:"Internal server error"});
    }
};