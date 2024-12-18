import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import photoService from "../services/photoService";
import { resetMessage } from './userSlice';

const initialState = {
  photos: {},
  photo: {},
  error: false,
  success: false,
  loading: false,
  message: null,
}

// Funcoes

export const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    resetPhotoMessage: (state) => {
      state.message = null;
    }
  }
});

export const { resetPhotoMessage } = photoSlice.actions;
export default photoSlice.reducer;
