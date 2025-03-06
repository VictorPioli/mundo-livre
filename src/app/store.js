import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../contador/counterSlice.js'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})