import { configureStore} from '@reduxjs/toolkit';
import { productsApi } from './services/products';
import { trendingApi } from './services/trending';
import authReducer from './auth/authSlice';
import cartReducer from './cart/cartSlice';
import recentReducer from './recent/recentSlice';

export const store = configureStore({
  reducer: {
    [trendingApi.reducerPath] : trendingApi.reducer,
    [productsApi.reducerPath] : productsApi.reducer,
    auth:authReducer,
    cart:cartReducer,
    recent:recentReducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(trendingApi.middleware,productsApi.middleware),
});
