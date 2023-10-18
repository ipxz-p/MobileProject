import express from 'express'
import { getAllUser, getAuthorFollower, getUser, updateUser } from '../controllers/usersController.js'
import { upload } from '../config/multerConfig.js'
const router = express.Router()
/**
 * @openapi
 * /user/getUser:
 *  get:
 *     tags:
 *     - user
 *     description: get one user
 *     parameters:
 *      - name: userId
 *        in: body
 *        description: user id
 *        required: true
 *     responses:
 *       200:
 *         description: ข้อมูล user
 */
router.get("/getUser", getUser)
/**
 * @openapi
 * /user/getAllUser:
 *  get:
 *     tags:
 *     - user
 *     description: get all user
 *     responses:
 *       200:
 *         description: ข้อมูล user
 */
router.get("/getAllUser", getAllUser)
/**
 * @openapi
 * /user/getAuthorFollower:
 *  get:
 *     tags:
 *     - user
 *     description: ดึงผู้ติดตามของมึงอะ
 *     parameters:
 *      - name: userId
 *        in: body
 *        description: user id
 *        required: true
 *     responses:
 *       200:
 *         description: ข้อมูล user
 */
router.get("/getAuthorFollower", getAuthorFollower)
/**
 * @openapi
 * /user/updateUser:
 *  put:
 *     tags:
 *     - user
 *     description: get one user
 *     parameters:
 *      - name: userId
 *        in: body
 *        description: user id
 *        required: true
 *      - name: username
 *        in: body
 *        description: username
 *      - name: email
 *        in: body
 *        description: email
 *      - name: dateOfBirth
 *        in: body
 *        description: dateOfBirth
 *      - name: images
 *        in: formData
 *        type: file
 *        description: profile image
 *     responses:
 *       200:
 *         description: ข้อมูล user
 */
router.put("/updateUser", upload.array("images"), updateUser)
export default router