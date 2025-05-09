import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  phase: 'preparation', // 'preparation' | 'battle' | 'result'
  round: 1,
  isActive: true,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPhase(state, action) {
      state.phase = action.payload;
    },
    nextRound(state) {
      state.round += 1;
    },
    setActive(state, action) {
      state.isActive = action.payload;
    },
  },
});

export const { setPhase, nextRound, setActive } = gameSlice.actions;
export default gameSlice.reducer;
