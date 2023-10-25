import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './slice/newsSlice';

const store = configureStore({
  reducer: {news: newsReducer}
})

console.log("on create store: ", store.getState());

store.subscribe(() => {
  console.log("Store changed! ", store.getState());
})

export default store;
