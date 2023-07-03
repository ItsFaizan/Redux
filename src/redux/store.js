import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/countSlice'
export default configureStore({
  reducer: {
    count: counterReducer
  },
})