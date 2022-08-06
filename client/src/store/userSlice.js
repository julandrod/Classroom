import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../axiosConfig";

export const getUserInfoLogin = createAsyncThunk(
  "user/getUserInfoLogin",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth/register", {
        username,
        email,
        password,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

const initialState = {
  userInfo: JSON.parse(localStorage.getItem("user")) || "",
  userLoading: false,
  userError: false,
  errorInfo: "",
  token: JSON.parse(localStorage.getItem("token")) || "",
  showAlert: false,
  alertText: "",
  alertType: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = "";
      state.token = "";
      localStorage.setItem("user", JSON.stringify(state.userInfo));
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    displayAlert: (state, action) => {
      console.log(action.payload.alertText);
      state.showAlert = true;
      state.alertText = action.payload.alertText;
      state.alertType = action.payload.alertType;
    },
    clearAlert: (state) => {
      state.alertText = "";
      state.alertType = "";
      state.showAlert = false;
    },
  },
  extraReducers: {
    // obtener informacion de usuario para login
    [getUserInfoLogin.pending]: (state) => {
      state.userLoading = true;
      state.userError = false;
    },
    [getUserInfoLogin.fulfilled]: (state, action) => {
      state.userLoading = false;
      state.userInfo = action.payload.user;
      state.token = action.payload.token;
      state.errorInfo = "";
      localStorage.setItem("user", JSON.stringify(state.userInfo));
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    [getUserInfoLogin.rejected]: (state, action) => {
      state.userLoading = false;
      state.userError = true;
      state.errorInfo = action.payload;
    },
    // informacion de usuario para registro
    [registerUser.pending]: (state) => {
      state.userLoading = true;
      state.userError = false;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.userLoading = false;
      state.userInfo = action.payload.user;
    },
    [registerUser.rejected]: (state, action) => {
      state.userLoading = false;
      state.userError = true;
      state.errorInfo = action.payload;
    },
  },
});

export const { login, logout, displayAlert, clearAlert } = userSlice.actions;
export const selectUserState = (state) => state.user;
export default userSlice.reducer;
