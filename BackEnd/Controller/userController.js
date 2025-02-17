import userModel from "../Models/userModel.js"
import expressAsyncHandler from "express-async-handler"
import generateToken from "../Config/generateToken.js"

const loginController= expressAsyncHandler(async (req, res)=>{

    const{ name, password }= req.body;

    const user= await userModel.findOne({name});

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    }else{
        throw new Error("Invalid username or password");
    }
});

const registerController= expressAsyncHandler(async (req, res)=>{

    const{ name, email, password }= req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error("Fill all the necessary fields");
    }

    const userExist= await userModel.findOne({email});

    if(userExist){
        res.status(400);
        throw new Error("Account already exist");
    }

    const userNameExist= await userModel.findOne({name});

    if(userNameExist){
        res.status(400);
        throw new Error("UserName already exist");
    }

    const user= await userModel.create({ name, email, password });

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    }else{
        res.status(400);
        throw new Error("Registration Error");
    }
});

export { loginController, registerController };