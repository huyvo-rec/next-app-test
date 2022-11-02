import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFormItem } from "../contants/IFormItem";

export const postUserInfor = createAsyncThunk(
  "user/postUserInfor",
  async (form) => {
    const response = await axios
      .post("http://localhost:5000/v1/auth", {
        form,
      })
      .then(function (res: any) {
        console.log(res);
      })
      .catch(function (error: any) {
        console.log(error);
      });

    return response;
  }
);

const initialState = <IFormItem>{
  fullname: "",
  email: "",
  password: "",
  numberID: 0,
  expiryDate: "",
  loading: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [postUserInfor.pending.type]: (state) => {
      state.loading = true;
    },
    [postUserInfor.fulfilled.type]: (
      state,
      { payload }: PayloadAction<IFormItem>
    ) => {
      state.loading = false;
      if (payload) {
        state.fullname = payload.fullname;
        state.email = payload.email;
        state.password = payload.password;
        state.expiryDate = payload.expiryDate;
        state.numberID = { ...payload }.numberID;
      }
    },
    [postUserInfor.rejected.type]: (state) => {
      state.loading = false;
    },
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
