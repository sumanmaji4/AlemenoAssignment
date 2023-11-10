import React from 'react'
import classes from './ProgressBar.module.css'

function ProgressBar({ course }) {
  let percent = 0

  const student = course.students.find(
    (student) => student.id.toString() === '101'
  )
  percent = student.progress

  return (
    <div className={classes.progress}>
      <span>{percent}%</span>
      <div style={{ width: `${percent}%` }} />
    </div>
  )
}

export default ProgressBar
