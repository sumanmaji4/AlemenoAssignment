import CourseList from '../components/CourseList'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCoursedata } from '../store/course-action'
import { useEffect } from 'react'

function Home() {
  const dispatch = useDispatch()
  let search = useSelector((state) => state.ui.search)
  search = search.toLowerCase()
  const courses = useSelector((state) => state.courses.courses)
  const notification = useSelector((state) => state.ui.notification)

  const searchedItem = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(search) ||
      course.instructor.toLowerCase().includes(search)
  )

  // console.log(search, searchedItem)

  useEffect(() => {
    dispatch(fetchCoursedata())
  }, [dispatch])

  // console.log(notification)
  // console.log(courses)

  return (
    <>
      {notification && <h2>{notification.message}</h2>}
      {!courses && <h2>Error occured, course list is empty !!!</h2>}
      {!notification && courses && (
        <CourseList courses={searchedItem} heading='All Courses' />
      )}
    </>
  )
}

export default Home
