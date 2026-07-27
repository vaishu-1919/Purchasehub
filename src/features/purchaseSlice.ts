import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Purchase {
  id: number;
  item: string;
  quantity: number;
}

interface PurchaseState {
  purchases: Purchase[];
}

const initialState: PurchaseState = {
  purchases: [],
};

const purchaseSlice = createSlice({
  name: "purchase",

  initialState,

  reducers: {
    addPurchase: (state, action: PayloadAction<Purchase>) => {
      state.purchases.push(action.payload);
    },

    removePurchase: (state, action: PayloadAction<number>) => {
      state.purchases = state.purchases.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addPurchase, removePurchase } = purchaseSlice.actions;

export default purchaseSlice.reducer;