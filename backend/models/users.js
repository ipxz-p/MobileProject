import mongoose from "mongoose";
const usersSchena = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true
    },
    roles:{
        type: String,
        default: 'member'
    },
    profileImgPath:{
        type: String,
        default: 'defaultImg.jpg'
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
})

export default mongoose.model("users", usersSchena)