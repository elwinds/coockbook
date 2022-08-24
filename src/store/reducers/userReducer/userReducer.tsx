import { userAction, UserActionTypes, userState } from "./userTypes";

const initialState: userState = {
  email: "",
  favorites: [],
};

export const userReducer = (
  state = initialState,
  action: userAction
): userState => {
  switch (action.type) {
    case UserActionTypes.SET_USER_EMAIL:
      return { email: action.payload, favorites: [] };
    case UserActionTypes.SET_FAVORITE_ID:
      return {
        email: state.email,
        favorites: [...state.favorites, action.payload],
      };
    case UserActionTypes.CLEAR_USER_EMAIL:
      return { email: "", favorites: [] };
    case UserActionTypes.DELETE_FAVORITE_ID:
      return {
        email: state.email,
        favorites: state.favorites.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};
