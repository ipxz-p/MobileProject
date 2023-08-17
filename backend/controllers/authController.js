import users from "../models/users.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
    const {
        username,
        email,
        password
    } = req.body
    if(!username || !password || !email){
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const duplicateEmail = await users.findOne({email}).exec()
    const duplicateUsername = await users.findOne({username}).exec()
    if(duplicateEmail){
        return res.status(409).json({ message: 'Duplicate email' })
    }
    if(duplicateUsername){
        return res.status(409).json({ message: 'Duplicate username' })
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const User = await users.create({
        username,
        email,
        password: hashPassword
    })
    if(User){
        res.status(201).json({
            message: 'Success'
        })
    }else{
        res.status(400).json({ message: 'Invalid user data received' })
    }
}

export const login = async (req, res) => {
    const {
        email,
        password
    } = req.body
    if(!password || !email){
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const foundUser = await users.findOne({email}).exec()
    if(!foundUser){
        return res.status(401).json({message: 'Email or password incorrect'})
    }
    const match = await bcrypt.compare(password, foundUser.password)
    if(!match){
        return res.status(401).json({message: 'Email or password incorrect'})
    }
    const accessToken = jwt.sign(
    {
        "UserInfo": {
            "username": foundUser.username,
            "email": foundUser.email,
            "roles": foundUser.roles,
            "profileImgPath": foundUser.profileImgPath,
            "dateOfBirth": foundUser?.dateOfBirth
        }
    },
    process.env.ACCESS_TOKEN_KEY,
    {expiresIn: '10m'}
    )
    const refreshToken = jwt.sign(
        {
            "email": foundUser.email
        },
        process.env.REFRESH_TOKEN_KEY,
        {expiresIn: '1d'}
    )
    res.cookie('jwt', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        maxAge: 1 * 24 * 60 * 60 * 1000
    })
    res.json({accessToken})
}

export const logout = async (req, res) => {
    const cookies = req.cookies
    if(!cookies?.jwt) return res.sendStatus(204)
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
    res.json({message: 'cookies claerd'})
}