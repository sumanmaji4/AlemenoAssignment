import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import SingleCourse from '../components/SingleCourse'
import { fetchCoursedata } from '../store/course-action'

function CourseDetails() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCoursedata())
  }, [dispatch])

  const params = useParams()
  let Id = params.courseId

  const courses = useSelector((state) => state.courses.courses)
  const course = courses.find((item) => item.id.toString() === Id.toString())
  const notification = useSelector((state) => state.ui.notification)

  return (
    <div>
      {notification && <h2>{notification.message}</h2>}
      {!notification && course && <SingleCourse course={course} />}
    </div>
  )
}

export default CourseDetails
