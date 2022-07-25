import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = process.env.REACT_APP_API_URL;

const initialState = {
    isLoading:false,
    error:null,
    token:null,
    isAuth:false,
    user:null,
    userExists:false,
    success:false
}


export const getUser = createAsyncThunk('auth/getUser',async(user_email,thunkAPI) => {
    try {
        const res = await axios.get(`${baseUrl}/auth/getUser/${user_email}`)
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Something went wrong');
    }
});

export const login = createAsyncThunk('auth/login',async(user,thunkAPI) => {
    try {
        const res = await axios.post(`${baseUrl}/auth/login`,user);
        return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
        
    }
});

export const signup = createAsyncThunk('auth/signup',async(user,thunkAPI) => {
    try {
        const res = await axios.post(`${baseUrl}/auth/signup`,user);
        return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
})



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.isAuth = false;
      state.token = null;
      state.user = null;
      state.userExists = false;
    },
    clearTransaction :state => {
      state.user = null;
    }
  },
  extraReducers: {
    [getUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
    },
    [getUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.user = { email: action.payload.email };
      state.userExists = action.payload.userExists;
    },
    [getUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
    [login.pending]: state => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.user = action.payload.user;
      state.isAuth = true;
      state.token = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
    [signup.pending]: state => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
    },
    [signup.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success= true;
    },
    [signup.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {logout,clearTransaction} = authSlice.actions;
export default authSlice.reducer;