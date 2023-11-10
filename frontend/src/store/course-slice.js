import { createSlice } from '@reduxjs/toolkit'

const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    changed: false,
  },
  reducers: {
    replaceCourses(state, action) {
      state.courses = action.payload
      state.changed = false
    },
    addLike(state, action) {
      const courseId = action.payload
      const course = state.courses.find(
        (item) => item.id.toString() === courseId.toString()
      )
      course.totalLikes++
      state.changed = true
    },
    markDone(state, action) {
      const courseId = action.payload
      const course = state.courses.find(
        (item) => item.id.toString() === courseId.toString()
      )
      const student = course.students.find(
        (item) => item.id.toString() === '101'
      )
      student.progress = 100
      state.changed = true
    },
  },
})

export const courseAction = courseSlice.actions

export default courseSlice
