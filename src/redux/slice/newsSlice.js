import {createSlice} from '@reduxjs/toolkit'

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    data: []
  },
  reducers: {
    addToSaved: (state, action) => {
      const filterSavedNews = state.data.find(
        (item) => item.title === action.payload.title
      );
      if (filterSavedNews) {
        const filtered = state.data.filter(
          (item) => item.title !== filterSavedNews.title
        );
        state.data = filtered;
      } else {
        state.data.push(action.payload);
      }
    }
  }
});

export const {addToSaved} = newsSlice.actions;
export default newsSlice.reducer;