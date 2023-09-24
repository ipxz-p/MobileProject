import mongoose, { isValidObjectId } from "mongoose";
import users from "../models/users.js"

export const getAllUser = async (req, res) => {
    const Users = await users.find().select("-password");
    return res.status(200).json(Users)
}

export const getAuthorFollower = async (req, res) => {
    const {userId} = req.body
    const User = await users.find({follower: userId}).select("-password").exec()
    return res.status(200).json(User);
}

export const updateUser = async (req, res) => {
    const {
        id,
        username,
        email,
        dateOfBirth
    } = req.body
    if(!isValidObjectId(id)) return res.status(400).json({message: "Non valid objectId"})
    const User = await users.findById(id).select("-password").exec()
    if(!User) return res.status(400).json({ message: 'User not found' })
    if(username) User.username = username
    if(email) User.email = email
    if(req.files.length) User.profileImgPath = req.files[0].originalname
    if(dateOfBirth) User.dateOfBirth = dateOfBirth
    await User.save()
    return res.status(200).json(User)
}