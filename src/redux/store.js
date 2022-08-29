import { configureStore } from '@reduxjs/toolkit';
import aboutPageSlice from './reducers/aboutPageSlice';
import coctailsSlice from './reducers/filterSlice';


export const store = configureStore({
    reducer: {
      coctails: coctailsSlice, 
      coctail: aboutPageSlice
    }
  })