import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import purchaseReducer from "../features/purchaseSlice";
import supplierReducer from "../features/supplierSlice";

import { purchaseApi } from "../services/purchaseApi";
import { supplierApi } from "../services/supplierApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    purchase: purchaseReducer,
    supplier: supplierReducer,

    [purchaseApi.reducerPath]: purchaseApi.reducer,
    [supplierApi.reducerPath]: supplierApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(purchaseApi.middleware)
      .concat(supplierApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;