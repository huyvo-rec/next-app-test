import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFormItem } from "../contants/IFormItem";

export const doPostUserInfor = createAsyncThunk(
  "user/postUserInfor",
  async (form: IFormItem) => {
    try {
      const response = await axios.post("/api/auth", {
        form,
      });
      if (response) {
        return response.data.form;
      }
    } catch (error: any) {
      console.log(error);
    }
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
    [doPostUserInfor.pending.type]: (state) => {
      state.loading = true;
    },
    [doPostUserInfor.fulfilled.type]: (
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
    [doPostUserInfor.rejected.type]: (state) => {
      state.loading = false;
    },
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
