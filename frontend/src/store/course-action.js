import { uiAction } from './ui-slice'
import { courseAction } from './course-slice'

export const fetchCoursedata = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      dispatch(
        uiAction.showNotification({
          status: 'loading',
          message: 'course data loading...',
        })
      )

      const response = await fetch(
        'https://alemenoassignment-default-rtdb.asia-southeast1.firebasedatabase.app/courses.json'
      )

      if (!response.ok) {
        dispatch(
          uiAction.showNotification({
            status: 'error',
            message: 'could not fetch course data',
          })
        )
      }
      const data = await response.json()
      return data
    }

    try {
      const courseData = await fetchData()
      //   console.log(courseData)
      dispatch(courseAction.replaceCourses(courseData || []))
      dispatch(uiAction.hideNofication())
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: 'error',
          message: 'Fetching course data failed!',
        })
      )
    }
  }
}

export const sendCourseData = (courses) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: 'pending',
        message: 'sending course data',
      })
    )

    const sendRequest = async () => {
      const response = await fetch(
        'https://alemenoassignment-default-rtdb.asia-southeast1.firebasedatabase.app/courses.json',
        {
          method: 'PUT',
          body: JSON.stringify(courses),
        }
      )

      if (!response.ok) {
        dispatch(
          uiAction.showNotification({
            status: 'error',
            message: 'sending course data failed!',
          })
        )
      }
    }

    try {
      await sendRequest()

      dispatch(uiAction.hideNofication())
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: 'error',
          message: 'Sending cart data failed!',
        })
      )
    }
  }
}
