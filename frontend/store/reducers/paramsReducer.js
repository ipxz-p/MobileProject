import { GOTO_CATEGORY, NOVEL_ID, USER_ID , NOVEL_FROM_USER_ID, CHAPTER_TITLE, CHAPTER_CONTENT, CHAPTER_FROM_NOVEL_ID} from "../actions/paramsAction";

const initialState = {
    categoryType: '',
    novelId: '',
    userId: '',
    novelFromUserId: '',
    chapterTitle: '',
    chapterContent: '',
    chapterFromNovelId: '',
};

const paramsReducer = (state = initialState, action) => {
    if (action.type === GOTO_CATEGORY) {
        return {...state, categoryType: action.categoryType}
    }
    if (action.type === NOVEL_ID) {
        return {...state, novelId: action.novelId}
    }
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

    return state;
};

export default paramsReducer;