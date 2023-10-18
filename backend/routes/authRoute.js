import express from 'express';
import { 
    login,
    refresh,
    register 
} from '../controllers/authController.js';

const router = express.Router()

/**
 * @openapi
 * /auth/register:
 *  post:
 *     tags:
 *     - auth
 *     description: Register
 *     parameters:
 *      - name: username
 *        in: body
 *        description: username
 *        required: true
 *      - name: email
 *        in: body
 *        description: email
 *        required: true
 *      - name: password
 *        in: body
 *        description: password
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/register", register)
/**
 * @openapi
 * /auth/login:
 *  post:
 *     tags:
 *     - auth
 *     description: Login
 *     parameters:
 *      - name: email
 *        in: body
 *        description: email
 *        required: true
 *      - name: password
 *        in: body
 *        description: password
 *        required: true
 *     responses:
 *       200:
 *         description: return access token
 *       
 */
router.post("/login", login)
/**
 * @openapi
 * /auth/login:
 *  post:
 *     tags:
 *     - auth
 *     description: get new token
 *     parameters:
 *      - name: token
 *        in: body
 *        description: token
 *        required: true
 *     responses:
 *       200:
 *         description: return access token
 *       
 */
router.get("/refresh", refresh)

export default router