import { configureStore} from '@reduxjs/toolkit';
import { productsApi } from './services/products';
import { trendingApi } from './services/trending';
import authReducer from './auth/authSlice';
// import { authenticationApi } from './services/authentication';

export const store = configureStore({
  reducer: {
    [trendingApi.reducerPath] : trendingApi.reducer,
    [productsApi.reducerPath] : productsApi.reducer,
    auth:authReducer,
    // [authenticationApi.reducerPath]: authenticationApi.reducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(trendingApi.middleware,productsApi.middleware),
});
