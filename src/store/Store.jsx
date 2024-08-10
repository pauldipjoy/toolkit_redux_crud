import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "../features/redux/slice/BookSlice";


export const store = configureStore({
  reducer: {
    BookSlice: bookSlice.reducer,
  },
});
