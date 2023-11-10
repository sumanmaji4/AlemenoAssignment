import React from 'react'
import CourseList from '../components/CourseList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchCoursedata, sendCourseData } from '../store/course-action'

function UserDashboard() {
  const dispatch = useDispatch()

  const userId = '101'

  useEffect(() => {
    dispatch(fetchCoursedata())
  }, [dispatch])

  // const data = useSelector((state) => state.courses.courses)

  const courses = useSelector((state) => state.courses)

  useEffect(() => {
    if (courses.changed) {
      dispatch(sendCourseData(courses.courses))
    }
  }, [courses, dispatch])

  let mycourses = courses.courses.filter((item) => {
    return item.students.some((student) => student.id.toString() === userId)
  })

  let search = useSelector((state) => state.ui.search)
  search = search.toLowerCase()
  mycourses = mycourses.filter(
    (course) =>
      course.name.toLowerCase().includes(search) ||
      course.instructor.toLowerCase().includes(search)
  )

  const notification = useSelector((state) => state.ui.notification)

  return (
    <div>
      {notification && <h2>{notification.message}</h2>}
      {!mycourses && <h2>Your course list is empty !!!</h2>}
      {!notification && mycourses && (
        <CourseList
          courses={mycourses}
          heading='Course Enrolled By Me'
          auth='true'
        />
      )}
    </div>
  )
}

export default UserDashboard
