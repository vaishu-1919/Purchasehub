import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Supplier {
  id: number;
  name: string;
  contact: string;
  email: string;
  status: string;
}

export const supplierApi = createApi({
  reducerPath: "supplierApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),

  tagTypes: ["Supplier"],

  endpoints: (builder) => ({
    getSuppliers: builder.query<Supplier[], void>({
      query: () => "suppliers",
      providesTags: ["Supplier"],
    }),

    addSupplier: builder.mutation<Supplier, Partial<Supplier>>({
      query: (supplier) => ({
        url: "suppliers",
        method: "POST",
        body: supplier,
      }),
      invalidatesTags: ["Supplier"],
    }),

    updateSupplier: builder.mutation<
      Supplier,
      { id: number; supplier: Partial<Supplier> }
    >({
      query: ({ id, supplier }) => ({
        url: `suppliers/${id}`,
        method: "PUT",
        body: supplier,
      }),
      invalidatesTags: ["Supplier"],
    }),

    deleteSupplier: builder.mutation<void, number>({
      query: (id) => ({
        url: `suppliers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Supplier"],
    }),
  }),
});

export const {
  useGetSuppliersQuery,
  useAddSupplierMutation,
  useUpdateSupplierMutation,
  useDeleteSupplierMutation,
} = supplierApi;