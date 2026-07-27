import { createSlice } from "@reduxjs/toolkit";

const supplierSlice = createSlice({
  name: "supplier",
  initialState: {
    editSupplier: null,
  },
  reducers: {
    setEditSupplier(state, action) {
      state.editSupplier = action.payload;
    },
    clearEditSupplier(state) {
      state.editSupplier = null;
    },
  },
});

export const {
  setEditSupplier,
  clearEditSupplier,
} = supplierSlice.actions;

export default supplierSlice.reducer;