import express from 'express'
import { addNovelToBookshelf, createChapter, createNovel, deleteChapter, deleteNovel, editChapter, editNovel, getBookshelfByUserId, getChapters, getNovels } from '../controllers/novelsController.js'
import { upload } from '../config/multerConfig.js'

const router = express.Router()
router.get("/getNovels", getNovels)
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
router.post("/createNovel", upload.array("images"), createNovel)
router.put("/editNovel", upload.array("images"), editNovel)
router.delete("/deleteNovel", deleteNovel)
router.get("/getBookshelfByUserId", getBookshelfByUserId)
router.post("/addNovelToBookshelf", addNovelToBookshelf)
router.get("/getChapters", getChapters)
router.post("/createChapter", createChapter)
router.put("/editChapter", editChapter)
router.delete("/deleteChapter", deleteChapter)
export default router