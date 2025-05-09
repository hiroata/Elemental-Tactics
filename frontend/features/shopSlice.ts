import { createSlice } from '@reduxjs/toolkit';
import { UnitType, initialUnitTypes } from './unitTypes';

const initialState = {
  shopUnits: initialUnitTypes.slice(0, 5), // 仮: 最初の5体をショップに表示
  refreshCost: 1,
  levelUpCost: 4,
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setShopUnits(state, action) {
      state.shopUnits = action.payload;
    },
    refreshShop(state, action) {
      state.shopUnits = action.payload;
    },
  },
});

export const { setShopUnits, refreshShop } = shopSlice.actions;
export default shopSlice.reducer;
