import express from 'express'
import { createChapter, createNovel } from '../controllers/novelsController.js'

const router = express.Router()
/**
 * @openapi
 * /novel/createNovel:
 *  post:
 *     tags:
 *     - novel
 *     description: create new novel
 *     parameters:
 *      - name: owner
 *        in: body
 *        description: user id
 *        required: true
 *      - name: title
 *        in: body
 *        description: title of novel
 *        required: true
 *      - name: description
 *        in: body
 *        description: description of novel
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/createNovel", createNovel)
router.post("/createChapter", createChapter)
export default router