import express from 'express'
import { getAllUser, getAuthorFollower, updateUser } from '../controllers/usersController.js'
import { upload } from '../config/multerConfig.js'
const router = express.Router()
router.get("/getAllUser", getAllUser)
router.get("/getAuthorFollower", getAuthorFollower)
router.put("/updateUser", upload.array("images"), updateUser)
export default router