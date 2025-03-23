import User from "../models/user.models.js"
import Message from "../models/message.models.js"
import cloudinary from "../library/cloudinary.lib.js"
import { getReceiverSocketId, io } from "../library/socket.lib.js";

export const getUsersForSidebar= async (req, res)=>{
    try {
        const loggedInUserId= req.user._id;
        const filteredUsers= await User.find({_id:{$ne:loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUsersForSiderbar controller", error.message);
        res.status(500).json({message:"Internal server error"});      
    }
};

export const getMessages= async (req, res)=>{
    try {
        const userId= req.user._id;
        const { id:userToChat }= req.params;

        const messages= await Message.find({$or:[
            {senderId: userId, receiverId: userToChat},
            {senderId: userToChat, receiverId: userId},
        ],});

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages controller", error.message);
        res.status(500).json({message:"Internal server error"});   
    }
};

export const sendMessage= async (req, res)=>{
    try {
        const { text, image }= req.body;
        const { id:userToSend }= req.params;
        const userId= req.user._id;
    
        let imageUrl;
    
        if(image){
            const uploadResponse= await cloudinary.uploader.upload(image);
            imageUrl= uploadResponse.secure_url;
        }
    
        const newMessage= new Message(
            {
                senderId: userId,
                receiverId: userToSend,
                text: text,
                image: imageUrl,
            }
        );
    
        await newMessage.save();
    
        const receiverSocketId = getReceiverSocketId(receiverId);
        
        if (receiverSocketId) {
          io.to(receiverSocketId).emit("newMessage", newMessage);
        }
    
        res.status(201).json({newMessage});
    } catch (error) {
        console.log("Error in sendMessage controller", error.message);
        res.status(500).json({message:"Internal server error"});         
    }
};