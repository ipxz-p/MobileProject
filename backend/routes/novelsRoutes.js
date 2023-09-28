import express from 'express'
import { addOrRemoveLike, addOrRemoveNovelToBookshelf, createChapter, createNovel, deleteChapter, deleteNovel, editChapter, editNovel, getBookshelfByUserId, getChapter, getChapters, getNovels, sendComment } from '../controllers/novelsController.js'
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
router.post("/addOrRemoveNovelToBookshelf", addOrRemoveNovelToBookshelf)
router.get("/getChapters", getChapters)
router.get("/getChapter", getChapter)
router.post("/createChapter", createChapter)
router.put("/editChapter", editChapter)
router.delete("/deleteChapter", deleteChapter)
router.post("/addOrRemoveLike", addOrRemoveLike)
router.post("/sendComment", sendComment)
export default router