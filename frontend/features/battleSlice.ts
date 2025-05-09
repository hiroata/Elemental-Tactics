import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  battleState: null, // バトル進行状況やログなど
  isBattleActive: false,
};

export const battleSlice = createSlice({
  name: 'battle',
  initialState,
  reducers: {
    setBattleState(state, action) {
      state.battleState = action.payload;
    },
    setBattleActive(state, action) {
      state.isBattleActive = action.payload;
    },
    resetBattle(state) {
      state.battleState = null;
      state.isBattleActive = false;
    },
  },
});

export const { setBattleState, setBattleActive, resetBattle } = battleSlice.actions;
export default battleSlice.reducer;
