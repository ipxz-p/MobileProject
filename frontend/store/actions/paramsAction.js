// ing

// แยกประเภท
export const GOTO_CATEGORY = "GOTO_CATEGORY";

export const gotoCategory = (categoryType) => {
    return { type: GOTO_CATEGORY, categoryType: categoryType };
};

//ส่งข้อมูลนิยาย
export const NOVEL_ID = "NOVEL_ID";

export const changeNovelId = (novelId) => {
    return { type: NOVEL_ID, novelId: novelId };
};

//ส่งข้อมูลตอนในนิยาย
export const CHAPTER_ID = "CHAPTER_ID";
export const changeChapterId = (chapterId, novel2Id, chapterNum) => {
    return { type: CHAPTER_ID, chapterId: chapterId, novel2Id: novel2Id, chapterNum: chapterNum };
};

//ส่งข้อมูลตอนในนิยาย
export const CHAPTER_INDEX = "CHAPTER_INDEX";
export const changeChapterIndex = (i) => {
    return { type: CHAPTER_INDEX, chapterIndex: i };
};


//ส่งข้อมูลไปชั้นหนังสือ
export const NOVELIDTOBSH_ID = "NOVELIDTOBSH_ID";
export const addBookShelf = (novel3Id) => {
    return { type: NOVELIDTOBSH_ID, novel3Id: novel3Id};
};

//ส่งข้อมูลหน้าfollowไปAuthor
export const AUTHOR_ID = "AUTHOR_ID";
export const gotoAuthor = (authorId) => {
    return { type: AUTHOR_ID, authorId: authorId};
};


// bae

// เก็บค่า user ที่ login
export const USER_ID = "USER_ID";
export const changeUserId = (userId) => {
    return { type: USER_ID, userId: userId };
};

// เก็บค่า novel id จาก user id
export const NOVEL_FROM_USER_ID = "NOVEL_FROM_USER_ID";
export const changeNovelFromUserId = (novelFromUserId) => {
    return { type: NOVEL_FROM_USER_ID, novelFromUserId: novelFromUserId };
};

// เก็บค่า chapter id จาก novel id 
export const CHAPTER_FROM_NOVEL_ID = "CHAPTER_FROM_NOVEL_ID";
export const changeChapterFromNovelId = (chapterFromNovelId) => {
    return { type: CHAPTER_FROM_NOVEL_ID, chapterFromNovelId: chapterFromNovelId };
};

// เก็บค่า title ของแต่ละตอน 
export const CHAPTER_TITLE = "CHAPTER_TITLE";
export const changeChapterTitle = (chapterTitle) => {
    return { type: CHAPTER_TITLE, chapterTitle: chapterTitle };
};

// เก็บค่า content ของแต่ละตอน 
export const CHAPTER_CONTENT = "CHAPTER_CONTENT";
export const changeChapterContent = (chapterContent) => {
    return { type: CHAPTER_CONTENT, chapterContent: chapterContent };
};

// เก็บค่า image จาก novel id
export const IMG_FROM_NOVEL_ID = "IMG_FROM_NOVEL_ID";
export const changeImgFromNovelId = (imgFromNovelId) => {
    return { type: IMG_FROM_NOVEL_ID, imgFromNovelId: imgFromNovelId };
};