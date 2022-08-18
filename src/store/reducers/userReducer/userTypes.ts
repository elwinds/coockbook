export interface userState {
    email: string,
    favorites: string[]
}

export enum UserActionTypes {
    SET_USER_EMAIL = 'SET_USER_EMAIL',
    SET_FAVORITE_ID = 'SET_FAVORITE_ID'
}

interface setUserEmailAction {
    type: UserActionTypes.SET_USER_EMAIL;
    payload: string;
}

interface setFavoriteIdAction {
    type: UserActionTypes.SET_FAVORITE_ID;
    payload: string
}

export type userAction = setUserEmailAction | setFavoriteIdAction;