// ユニット型を定義
export interface Unit {
  id: string;
  unitTypeId: string;
  attack: number;
  health: number;
  position: number;
  level: number;
}

interface UnitsState {
  units: Unit[];
}

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: UnitsState = {
  units: [],
};

export const unitsSlice = createSlice({
  name: 'units',
  initialState,
  reducers: {
    setUnits(state, action: PayloadAction<Unit[]>) {
      state.units = action.payload;
    },
    addUnit(state, action: PayloadAction<Unit>) {
      state.units.push(action.payload);
    },
    removeUnit(state, action: PayloadAction<string>) {
      state.units = state.units.filter(u => u.id !== action.payload);
    },
    moveUnit(state, action: PayloadAction<{ id: string; position: number }>) {
      const { id, position } = action.payload;
      const unit = state.units.find(u => u.id === id);
      if (unit) unit.position = position;
    },
    upgradeUnit(state, action: PayloadAction<{ id: string; level: number }>) {
      const { id, level } = action.payload;
      const unit = state.units.find(u => u.id === id);
      if (unit) unit.level = level;
    },
  },
});

export const { setUnits, addUnit, removeUnit, moveUnit, upgradeUnit } = unitsSlice.actions;
export default unitsSlice.reducer;
