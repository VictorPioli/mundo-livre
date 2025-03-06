import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

let id = 0;
const initialState = {
  counters: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCounter: (state) => {
      state.counters.push({ id: id++, value: 0, color: getRandomColor() });
    },
    increment: (state, action) => {
      const counter = state.counters.find((c) => c.id === action.payload);
      if (counter) counter.value += 1;
    },
    decrement: (state, action) => {
      const counter = state.counters.find((c) => c.id === action.payload);
      if (counter) counter.value -= 1;
    },
    removeCounter: (state, action) => {
      state.counters = state.counters.filter((c) => c.id !== action.payload);
    },
    resetCounter: (state, action) => {
      const counter = state.counters.find((c) => c.id === action.payload);
      if (counter) counter.value = 0;
    },
  },
});

export const { addCounter, increment, decrement, removeCounter, resetCounter } =
  counterSlice.actions;
export default counterSlice.reducer;

export const incrementAsync = (index) => (dispatch) => {
  setTimeout(() => {
    dispatch(increment(index));
    console.log("Ativado");
  }, 1000);
};

export const addCounterAsync = createAsyncThunk(
  "counter/addCounterAsync",
  async (_, { dispatch }) => {
    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        dispatch(addCounter());
      }, 500 * i);
    }
  }
);
