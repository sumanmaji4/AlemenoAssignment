import { useState } from 'react'
import classes from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom'
import { uiAction } from '../store/ui-slice'
import { useDispatch } from 'react-redux'

function MainNavigation({ handleChange }) {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const setSearch = (value) => {
    setInput(value)
    dispatch(uiAction.setSearch(value))
  }

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? classes.active : '')}
              end='true'
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/user/101'
              className={({ isActive }) => (isActive ? classes.active : '')}
              end='true'
            >
              My Dashboard
            </NavLink>
          </li>

          <li>
            <input
              placeholder='search heare...'
              value={input}
              onChange={(e) => setSearch(e.target.value)}
            />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
