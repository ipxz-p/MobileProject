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
 *      - name: images
 *        in: formData
 *        type: file
 *        description: image of novel
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
/**
 * @openapi
 * /novel/deleteNovel:
 *  delete:
 *     tags:
 *     - novel
 *     description: delete novel
 *     parameters:
 *      - name: novelId
 *        in: body
 *        description: novel id
 *        required: true
 *     responses:
 *       200:
 *         description: send message "Delete success"
 */
router.delete("/deleteNovel", deleteNovel)
/**
 * @openapi
 * /novel/getBookshelfByUserId:
 *  get:
 *     tags:
 *     - novel
 *     description: get บุ้กเชลที่มึงกดไว้
 *     parameters:
 *      - name: novelId
 *        in: body
 *        description: novel id
 *        required: true
 *     responses:
 *       200:
 *         description: send novel
 */
router.get("/getBookshelfByUserId", getBookshelfByUserId)
/**
 * @openapi
 * /novel/addOrRemoveNovelToBookshelf:
 *  post:
 *     tags:
 *     - novel
 *     description: add or remove Bookshelf
 *     parameters:
 *      - name: novelId
 *        in: body
 *        description: novel id
 *        required: true
 *      - name: userId
 *        in: body
 *        description: user รก
 *        required: true
 *     responses:
 *       200:
 *         description: send message 
 */
router.post("/addOrRemoveNovelToBookshelf", addOrRemoveNovelToBookshelf)
/**
 * @openapi
 * /novel/getChapters:
 *  get:
 *     tags:
 *     - novel
 *     description: get all Chapter
 *     parameters:
 *      - name: novelId
 *        in: body
 *        description: novel id
 *        required: true
 *     responses:
 *       200:
 *         description: send chapter
 */
router.get("/getChapters", getChapters)
/**
 * @openapi
 * /novel/getChapter:
 *  get:
 *     tags:
 *     - novel
 *     description: get one Chapter
 *     parameters:
 *      - name: novelId
 *        in: body
 *        description: novel id
 *        required: true
 *      - name: chapterId
 *        in: body
 *        description: chapterId
 *        required: true
 *      - name: userId
 *        in: body
 *        description: userId
 *        required: true
 *     responses:
 *       200:
 *         description: send chapter
 */
router.get("/getChapter", getChapter)
/**
 * @openapi
 * /novel/createChapter:
 *  post:
 *     tags:
 *     - novel
 *     description: createChapter
 *     parameters:
 *      - name: novelId
 *        in: body
 *        description: novel id
 *        required: true
 *      - name: title
 *        in: body
 *        description: title
 *        required: true
 *      - name: content
 *        in: body
 *        description: content
 *        required: true
 *     responses:
 *       200:
 *         description: send chapter
 */
router.post("/createChapter", createChapter)
/**
 * @openapi
 * /novel/editChapter:
 *  put:
 *     tags:
 *     - novel
 *     description: editChapter
 *     parameters:
 *      - name: novelId
 *        in: body
 *        description: novel id
 *        required: true
 *      - name: chapterId
 *        in: body
 *        description: chapterId
 *        required: true
 *      - name: title
 *        in: body
 *        description: title
 *        required: true
 *      - name: content
 *        in: body
 *        description: content
 *        required: true
 *     responses:
 *       200:
 *         description: send chapter
 */
router.put("/editChapter", editChapter)
/**
 * @openapi
 * /novel/deleteChapter:
 *  delete:
 *     tags:
 *     - novel
 *     description: deleteChapter
 *     parameters:
 *      - name: novelId
 *        in: body
 *        description: novel id
 *        required: true
 *      - name: chapterId
 *        in: body
 *        description: chapterId
 *        required: true
 *     responses:
 *       200:
 *         description: send message "Chapter deleted successfully"
 */
router.delete("/deleteChapter", deleteChapter)
/**
 * @openapi
 * /novel/addOrRemoveLike:
 *  post:
 *     tags:
 *     - novel
 *     description: deleteChapter
 *     parameters:
 *      - name: novelId
 *        in: body
 *        description: novel id
 *        required: true
 *      - name: chapterId
 *        in: body
 *        description: chapterId
 *        required: true
 *      - name: userId
 *        in: body
 *        description: userId
 *        required: true
 *     responses:
 *       200:
 *         description: send message "Success"
 */
router.post("/addOrRemoveLike", addOrRemoveLike)
/**
 * @openapi
 * /novel/sendComment:
 *  post:
 *     tags:
 *     - novel
 *     description: sendComment
 *     parameters:
 *      - name: novelId
 *        in: body
 *        description: novel id
 *        required: true
 *      - name: chapterId
 *        in: body
 *        description: chapterId
 *        required: true
 *      - name: author
 *        in: body
 *        description: author
 *        required: true
 *      - name: comment
 *        in: body
 *        description: comment
 *        required: true
 *     responses:
 *       200:
 *         description: send message "Success"
 */
router.post("/sendComment", sendComment)
/**
 * @openapi
 * /novel/editComment:
 *  put:
 *     tags:
 *     - novel
 *     description: editComment
 *     parameters:
 *      - name: novelId
 *        in: body
 *        description: novel id
 *        required: true
 *      - name: chapterId
 *        in: body
 *        description: chapterId
 *        required: true
 *      - name: commentId
 *        in: body
 *        description: commentId
 *        required: true
 *      - name: comment
 *        in: body
 *        description: comment
 *        required: true
 *     responses:
 *       200:
 *         description: send message "Success"
 */
router.put("/editComment", editComment)
/**
 * @openapi
 * /novel/deleteComment:
 *  delete:
 *     tags:
 *     - novel
 *     description: deleteComment
 *     parameters:
 *      - name: novelId
 *        in: body
 *        description: novel id
 *        required: true
 *      - name: chapterId
 *        in: body
 *        description: chapterId
 *        required: true
 *      - name: commentId
 *        in: body
 *        description: commentId
 *        required: true
 *     responses:
 *       200:
 *         description: send message "Success"
 */
router.delete("/deleteComment", deleteComment)
/**
 * @openapi
 * /novel/addOrRemoveLikeComment:
 *  post:
 *     tags:
 *     - novel
 *     description: addOrRemoveLikeComment
 *     parameters:
 *      - name: novelId
 *        in: body
 *        description: novel id
 *        required: true
 *      - name: chapterId
 *        in: body
 *        description: chapterId
 *        required: true
 *      - name: commentId
 *        in: body
 *        description: commentId
 *        required: true
 *      - name: userId
 *        in: body
 *        description: userId
 *        required: true
 *     responses:
 *       200:
 *         description: send message "Success"
 */
router.post("/addOrRemoveLikeComment", addOrRemoveLikeComment)
export default router