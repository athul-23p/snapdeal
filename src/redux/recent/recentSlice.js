import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const baseUrl = process.env.REACT_APP_API_URL + '/recent';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const getRecentItems = createAsyncThunk(
  'recents/getItems',
  async (_, thunkAPI) => {
    try {

      const res = await axios.get(`${baseUrl}/`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);

export const addRecentItem = createAsyncThunk(
  'recent/addItem',
  async (doc, thunkAPI) => {
    try {
        const resp = await axios.post(`${baseUrl}/addProduct`,doc);
        thunkAPI.dispatch(getRecentItems());
        return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);


const recentSlice = createSlice({
  name: 'recent',
  initialState,
  extraReducers: {
    [getRecentItems.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getRecentItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload.map(items => items.product);
    },
    [getRecentItems.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addRecentItem.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addRecentItem.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addRecentItem.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default recentSlice.reducer;
