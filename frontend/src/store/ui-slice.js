import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    search: '',
    notification: null,
  },
  reducers: {
    setSearch(state, action) {
      state.search = action.payload
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
      }
    },
    hideNofication(state) {
      state.notification = null
    },
  },
})

export const uiAction = uiSlice.actions

export default uiSlice
