import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './features/gameSlice';
import playerReducer from './features/playerSlice';
import unitsReducer from './features/unitsSlice';
import shopReducer from './features/shopSlice';
import battleReducer from './features/battleSlice';
import unitTypesReducer from './features/unitTypesSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    player: playerReducer,
    units: unitsReducer,
    shop: shopReducer,
    battle: battleReducer,
    unitTypes: unitTypesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
