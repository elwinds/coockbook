export interface userState {
    email: string,
    favorites: string[]
}

export enum UserActionTypes {
    SET_USER_EMAIL = 'SET_USER_EMAIL',
    SET_FAVORITE_ID = 'SET_FAVORITE_ID',
    CLEAR_USER_EMAIL = 'CLEAR_USER_EMAIL',
    DELETE_FAVORITE_ID = 'DELETE_FAVORITE_ID',
}

interface SetUserEmailAction {
    type: UserActionTypes.SET_USER_EMAIL;
    payload: string;
}

interface SetFavoriteIdAction {
    type: UserActionTypes.SET_FAVORITE_ID;
    payload: string
}

interface ClearUserEmailAction {
    type: UserActionTypes.CLEAR_USER_EMAIL
}

interface DeleteFavoriteIdAction {
    type: UserActionTypes.DELETE_FAVORITE_ID,
    payload: string,
}

export type userAction = SetUserEmailAction | SetFavoriteIdAction | ClearUserEmailAction | DeleteFavoriteIdAction;