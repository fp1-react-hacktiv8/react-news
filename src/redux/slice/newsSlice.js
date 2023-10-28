import {createSlice} from '@reduxjs/toolkit'

const loadFromLocalStorage = () => {
  try {
    const serializedData = localStorage.getItem('newsData');
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (err) {
    return undefined;
  }
};

const saveToLocalStorage = (data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem('newsData', serializedData);
  } catch (err) {
    // Handle errors, if any
  }
};

const initialState = loadFromLocalStorage() || {
  data: []
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
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

      saveToLocalStorage(state);
    }
  }
});

export const {addToSaved} = newsSlice.actions;
export default newsSlice.reducer;