import { userAction, UserActionTypes, userState } from "./userTypes";

const initialState = {
    email: '',
    favorites: [],
};

export const userReducer = (state = initialState, action: userAction): userState  => {
   switch (action.type) {
     case UserActionTypes.SET_USER_EMAIL:
       return { email: action.payload, favorites: [] }
     case UserActionTypes.SET_FAVORITE_ID:
        return { email: "", favorites: [...state.favorites, action.payload] };
     default:
       return state;
   }
};