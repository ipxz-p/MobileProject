import novel from "../models/novel.js"

export const createNovel = async (req, res) => {
    const {
        owner,
        title,
        description
    } = req.body

    if(!title || !description){
        return res.status(400).json({message: 'Please enter title and description'})
    }
    const images = req.files[0].originalname
    const Novel = await novel.create({
        title,
        description,
        images,
        owner
    })
    if(Novel){
        return res.status(200).json(Novel)
    }else{
        return res.status(400).json({message: 'Error occured'})
    }
}

export const createChapter = async (req, res) => {
    const {
        id,
        title,
        content
    } = req.body
    if(!title || !content){
        return res.status(400).json({message: "Please enter title and content of this chapter!"})
    }
    const Novel = await novel.findById(id).exec()
    if(!Novel){
        return res.status(400).json({message: "Novel not found"})
    }
    Novel.chapter.push({
        title,
        content
    })
    Novel.save();
    return res.status(200).json(Novel)
}


