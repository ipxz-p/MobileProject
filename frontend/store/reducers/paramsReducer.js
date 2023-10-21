import { GOTO_CATEGORY, NOVEL_ID, USER_ID , NOVEL_FROM_USER_ID} from "../actions/paramsAction";

const initialState = {
    categoryType: '',
    novelId: '',
    userId: '',
    novelFromUserId: '',
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
    return state;
};

export default paramsReducer;