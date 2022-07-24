import {createApi,fetchBaseQuery}  from '@reduxjs/toolkit/query/react';

export const trendingApi = createApi({
    reducerPath:'trending',
    baseQuery: fetchBaseQuery({baseUrl:process.env.REACT_APP_API_URL}),
    endpoints:(builder) => ({
        getTrendingProducts: builder.query({
            query:() => `trending`
        })
    })
})

export const {useGetTrendingProductsQuery} = trendingApi;