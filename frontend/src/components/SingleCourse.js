import classes from './SingleCourse.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function SingleCourse({ course }) {
  // console.log(course)

  const [show, toggle] = useState(false)

  const toggleBtn = () => {
    toggle((prev) => !prev)
  }

  return (
    <div className={classes.allItems}>
      <h2>{course.name}</h2>
      <img src={course.thumbnail} alt='thumbnail' />
      <p>
        <b>Instructor:</b> {course.instructor}
      </p>
      <p>
        <b>Description:</b> {course.description}
      </p>
      <p>
        <b>EnrollmentStatus: </b>
        {course.enrollmentStatus}
      </p>
      <p>
        <b>Total Likes: </b>
        {course.totalLikes}
      </p>
      <p>
        <b>Duration: </b>
        {course.duration}
      </p>
      <p>
        <b>Schedule: </b>
        {course.schedule}
      </p>
      <p>
        <b>location: </b>
        {course.location}
      </p>
      <div>
        <b>Prerequisites: </b>
        {course.prerequisites.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </div>
      <div>
        <button onClick={toggleBtn} className={classes.btn2nd}>
          {!show ? 'Show' : 'Hide'} Syllabus{' '}
        </button>
        {show &&
          course.syllabus.map((item) => (
            <div key={item.week}>
              <p>
                <b>Week: </b>
                {item.week}
              </p>
              <p>
                <b>Topic: </b>
                {item.topic}
              </p>
              <p>
                <b>Content: </b>
                {item.content}
              </p>
            </div>
          ))}
      </div>
      <Link to={'/'}>
        <button className={classes.btn}>Go Back</button>
      </Link>
    </div>
  )
}

export default SingleCourse
