import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  username: '',
  avatar: '',
  level: 1,
  health: 40,
  gold: 3,
  experience: 0,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayer(state, action) {
      return { ...state, ...action.payload };
    },
    updateGold(state, action) {
      state.gold = action.payload;
    },
    updateHealth(state, action) {
      state.health = action.payload;
    },
    updateLevel(state, action) {
      state.level = action.payload;
    },
    updateExperience(state, action) {
      state.experience = action.payload;
    },
  },
});

export const { setPlayer, updateGold, updateHealth, updateLevel, updateExperience } = playerSlice.actions;
export default playerSlice.reducer;
