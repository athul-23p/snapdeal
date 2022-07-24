import { configureStore} from '@reduxjs/toolkit';
import { productsApi } from './services/products';
import { trendingApi } from './services/trending';

export const store = configureStore({
  reducer: {
    [trendingApi.reducerPath] : trendingApi.reducer,
    [productsApi.reducerPath] : productsApi.reducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(trendingApi.middleware,productsApi.middleware),
});
