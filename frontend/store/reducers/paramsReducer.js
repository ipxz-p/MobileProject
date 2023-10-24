import {GOTO_CATEGORY, NOVEL_ID, CHAPTER_ID, NOVELIDTOBSH_ID, AUTHOR_ID, CHAPTER_INDEX,
    USER_ID , NOVEL_FROM_USER_ID, CHAPTER_TITLE, CHAPTER_CONTENT, CHAPTER_FROM_NOVEL_ID , IMG_FROM_NOVEL_ID} from "../actions/paramsAction";

const initialState = {
    // ing
    categoryType: '',
    novelId: '',
    chapterId: '',
    novel2Id: '',
    chapterNum: '',
    novel3Id: '',
    authorId: '',
    chapterIndex: 0,

    // bae
    userId: '',
    novelFromUserId: '',
    chapterTitle: '',
    chapterContent: '',
    chapterFromNovelId: '',
    imgFromNovelId: '',
};

const paramsReducer = (state = initialState, action) => {
    // ingg
    if (action.type === GOTO_CATEGORY) {
        return {...state, categoryType: action.categoryType}
    }
    if (action.type === NOVEL_ID) {
        return {...state, novelId: action.novelId}
    }
    if (action.type === CHAPTER_ID) {
        return {...state, chapterId: action.chapterId, novel2Id: action.novel2Id, chapterNum: action.chapterNum}
    }
    if (action.type === NOVELIDTOBSH_ID) {
        return {...state, novel3Id: action.novel3Id}
    }
    if (action.type === AUTHOR_ID) {
        return {...state, authorId: action.authorId}
    }
    if (action.type === CHAPTER_INDEX) {
        return {...state, chapterIndex: action.chapterIndex}
    }

    // bae
    if (action.type === USER_ID){
        return {...state, userId: action.userId}
    }
    if (action.type === NOVEL_FROM_USER_ID) {
        return {...state, novelFromUserId: action.novelFromUserId}
    }
    if (action.type === CHAPTER_TITLE) {
        return {...state, chapterTitle: action.chapterTitle}
    }
    if (action.type === CHAPTER_CONTENT) {
        return {...state, chapterContent: action.chapterContent}
    }
    if (action.type === CHAPTER_FROM_NOVEL_ID) {
        return {...state, chapterFromNovelId: action.chapterFromNovelId}
    }
    if (action.type === IMG_FROM_NOVEL_ID) {
        return {...state, imgFromNovelId: action.imgFromNovelId}
    }

    return state;
};

export default paramsReducer;