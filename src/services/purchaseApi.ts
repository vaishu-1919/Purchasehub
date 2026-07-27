import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const purchaseApi = createApi({

  reducerPath: "purchaseApi",


  baseQuery: fetchBaseQuery({

    baseUrl: "http://localhost:3001/",

  }),


  tagTypes: ["Purchase"],



  endpoints: (builder) => ({



    // Get all purchases
    getPurchases: builder.query<any[], void>({

      query: () => "purchases",

      providesTags: ["Purchase"],

    }),




    // Add new purchase
    addPurchase: builder.mutation({

      query: (purchase) => ({

        url: "purchases",

        method: "POST",

        body: purchase,

      }),


      invalidatesTags: ["Purchase"],

    }),




    // Update purchase
    updatePurchase: builder.mutation({

      query: ({ id, ...data }) => ({

        url: `purchases/${id}`,

        method: "PUT",

        body: data,

      }),


      invalidatesTags: ["Purchase"],

    }),




    // Delete purchase
    deletePurchase: builder.mutation({

      query: (id) => ({

        url: `purchases/${id}`,

        method: "DELETE",

      }),


      invalidatesTags: ["Purchase"],

    }),



  }),


});



export const {

  useGetPurchasesQuery,

  useAddPurchaseMutation,

  useUpdatePurchaseMutation,

  useDeletePurchaseMutation,


} = purchaseApi;