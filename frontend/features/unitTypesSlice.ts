import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UnitType, initialUnitTypes } from './unitTypes';

interface UnitTypesState {
  unitTypes: UnitType[];
}

const initialState: UnitTypesState = {
  unitTypes: initialUnitTypes,
};

export const unitTypesSlice = createSlice({
  name: 'unitTypes',
  initialState,
  reducers: {
    setUnitTypes(state, action: PayloadAction<UnitType[]>) {
      state.unitTypes = action.payload;
    },
  },
});

export const { setUnitTypes } = unitTypesSlice.actions;
export default unitTypesSlice.reducer;
