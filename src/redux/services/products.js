import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath:'products',
    baseQuery:fetchBaseQuery({baseUrl:`${process.env.REACT_APP_API_URL}/products`}), 
    endpoints:(builder) => ({
        getProductById:builder.query({
            query:(id)=>`clothing/${id}`
        })
    })
})

export const {useGetProductByIdQuery} = productsApi;