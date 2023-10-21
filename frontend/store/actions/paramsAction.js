export const GOTO_CATEGORY = "GOTO_CATEGORY";

export const gotoCategory = (categoryType) => {
    return { type: GOTO_CATEGORY, categoryType: categoryType };
};



export const NOVEL_ID = "NOVEL_ID";

export const changeNovelId = (novelId) => {
    return { type: NOVEL_ID, novelId: novelId };
};

export const USER_ID = "USER_ID";

export const changeUserId = (userId) => {
    return { type: USER_ID, userId: userId };
};

export const NOVEL_FROM_USER_ID = "NOVEL_FROM_USER_ID";

export const changeNovelFromUserId = (novelFromUserId) => {
    return { type: NOVEL_FROM_USER_ID, novelFromUserId: novelFromUserId };
};