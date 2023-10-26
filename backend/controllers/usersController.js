import mongoose, { isValidObjectId } from "mongoose";
import users from "../models/users.js"
import novels from "../models/novels.js";

export const getUser = async (req, res) => {
    const userId = req.query.userId;
    const User = await users.findById(userId).select("-password")
    if (!User) return res.status(200).json({ message: "User not found" })
    return res.status(200).json(User);
}

export const getAllUser = async (req, res) => {
    const Users = await users.find().select("-password");
    return res.status(200).json(Users)
}

export const getAuthorFollower = async (req, res) => {
    const userId = req.query.userId
    const User = await users.find({ follower: userId }).select("-password").populate({
        path: 'follower',
        model: 'users',
        select: '_id username profileImgPath'
    }).exec()
    return res.status(200).json(User);
}

export const updateUser = async (req, res) => {
    const {
        userId,
        username,
        email,
        dateOfBirth
    } = req.body
    if (!isValidObjectId(userId)) return res.status(400).json({ message: "Non valid objectId" })
    const User = await users.findById(userId).select("-password").exec()
    if (!User) return res.status(400).json({ message: 'User not found' })
    if (username) User.username = username
    if (email) User.email = email
    if (req.files?.length) User.profileImgPath = req.files[0].originalname
    if (dateOfBirth) User.dateOfBirth = dateOfBirth
    await User.save()
    return res.status(200).json(User)
}

export const addOrRemoveFollower = async (req, res) => {
    const {
        yourUserId,
        userId
    } = req.body
    const user = await users.findById(userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const isAlreadyFollowing = user.follower.includes(yourUserId);
    if (isAlreadyFollowing) {
        await users.findByIdAndUpdate(userId, {
            $pull: { follower: yourUserId }
        });
        return res.status(200).json({ message: "Follower removed successfully" });
    } else {
        await users.findByIdAndUpdate(userId, {
            $addToSet: { follower: yourUserId }
        });
        return res.status(200).json({ message: "Follower added successfully" });
    }
}

export const getNotification = async (req, res) => {
    const userId = req.query.userId;
    let arrNoti = []
    const user = await users.findById(userId).exec();
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }
    for(let i=0; i<user.notification.length; i++){
        const notificationId = user.notification[i];
        const novel = await novels.findOne({ "chapter._id": notificationId }).exec();
        if (novel) {
            const chapterData = novel.chapter.find((chapter) => chapter._id.equals(notificationId));
            if (chapterData) {
                const data = {
                    chapterData,
                    images: novel.images,
                    titleOfNovel: novel.title
                }
                arrNoti.push(data);
            }
        }
    }
    arrNoti.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return res.status(200).json(arrNoti);
}