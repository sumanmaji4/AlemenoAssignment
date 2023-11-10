import { Link } from 'react-router-dom'
import classes from './CourseList.module.css'
import ProgressBar from './ProgressBar'
import { courseAction } from '../store/course-slice'
import { useDispatch } from 'react-redux'

function CourseList({ courses, heading, auth = false }) {
  // console.log(courses)

  const dispatch = useDispatch()

  const addlikehandler = (id) => {
    dispatch(courseAction.addLike(id))
  }

  const markdonehandler = (id) => {
    dispatch(courseAction.markDone(id))
  }

  return (
    <div className={classes.topDiv}>
      <h1>{heading}</h1>
      <ul className={classes.allItems}>
        {courses.map((item) => (
          <li key={item.id} className={classes.eachItem}>
            <img src={item.thumbnail} alt='course thumbnail' />
            <div>{item.name}</div>
            <div>{item.image}</div>
            <div>{item.duration}</div>

            <div>
              Total likes: <b>{item.totalLikes}</b>
            </div>

            {auth && (
              <div>
                <button
                  className={classes.btn2nd}
                  onClick={() => {
                    addlikehandler(item.id)
                  }}
                >
                  {' '}
                  Add Like
                </button>
              </div>
            )}
            {auth && (
              <div>
                <ProgressBar course={item} />
              </div>
            )}
            {auth && (
              <button
                className={classes.btn2nd}
                onClick={() => {
                  markdonehandler(item.id)
                }}
              >
                Mark As done
              </button>
            )}
            <div>Instructor: {item.instructor}</div>
            <div>{item.description}</div>
            <Link to={`/course/${item.id}`}>
              <button className={classes.btn}>Show Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseList
