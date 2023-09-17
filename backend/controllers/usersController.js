import users from "../models/users.js"

export const updateUser = async (req, res) => {
    const {
        id,
        username,
        email,
        dateOfBirth
    } = req.body
    const User = await users.findById(id).exec()
    if(!User) return res.status(400).json({ message: 'User not found' })
    if(username) User.username = username
    if(email) User.email = email
    if(req.files.length) User.profileImgPath = req.files[0].originalname
    if(dateOfBirth) User.dateOfBirth = dateOfBirth
    await User.save()
    return res.status(200).json({message: 'Success'})
}