import express from 'express'
import { addOrRemoveLike, addOrRemoveLikeComment, addOrRemoveNovelToBookshelf, createChapter, createNovel, deleteChapter, deleteComment, deleteNovel, editChapter, editComment, editNovel, getBookshelfByUserId, getChapter, getChapters, getNovel, getNovels, sendComment } from '../controllers/novelsController.js'
import { upload } from '../config/multerConfig.js'

const router = express.Router()
/**
 * @openapi
 * /novel/getNovels:
 *  get:
 *     tags:
 *     - novel
 *     description: get all novels
 *     responses:
 *       200:
 *         description: send Novels
 *  
 */
router.get("/getNovels", getNovels)
/**
 * @openapi
 * /novel/getNovel:
 *  get:
 *     tags:
 *     - novel
 *     description: get one novel
 *     parameters:
 *      - name: novelId
 *        in: body
 *        description: novel id
 *        required: true
 *     responses:
 *       200:
 *         description: send Novel
 *  
 */
router.get("/getNovel", getNovel)
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
/**
 * @openapi
 * /novel/editNovel:
 *  put:
 *     tags:
 *     - novel
 *     description: edit novel
 *     parameters:
 *      - name: novelId
 *        in: body
 *        description: novel id
 *        required: true
 *      - name: title
 *        in: body
 *        description: title of novel
 *      - name: description
 *        in: body
 *        description: description of novel
 *      - name: images
 *        in: formData
 *        type: file
 *        description: image of novel
 *     responses:
 *       200:
 *         description: send Novel ที่ถูกเเก้ไข
 */
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
router.put("/editComment", editComment)
router.delete("/deleteComment", deleteComment)
router.post("/addOrRemoveLikeComment", addOrRemoveLikeComment)
export default router