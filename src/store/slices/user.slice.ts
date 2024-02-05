import { getStorage } from "@/services";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type User = Partial<{
  fullName: string;
  email: string;
  isLoggedIn: boolean;
}>;

const initialState: User = {
  fullName: getStorage().getString("fullname") || "",
  email: getStorage().getString("email") || "",
  isLoggedIn: !!getStorage().getBoolean("login-status"),
};

export default createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginState(state, action: PayloadAction<User["isLoggedIn"]>) {
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    },
    setUserEmail(state, action: PayloadAction<User["email"]>) {
      return {
        ...state,
        email: action.payload,
      };
    },
    setUserFullName(state, action: PayloadAction<User["fullName"]>) {
      return {
        ...state,
        fullName: action.payload,
      };
    },
  },
});
