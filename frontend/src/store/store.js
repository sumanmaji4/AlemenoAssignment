import { configureStore } from '@reduxjs/toolkit'

import uiSlice from './ui-slice'
import courseSlice from './course-slice'

const store = configureStore({
  reducer: { ui: uiSlice.reducer, courses: courseSlice.reducer },
})

export default store
