import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import { useState } from 'react'

function RootLayout() {
  const [search, setSearch] = useState('')
  const handleChange = (value) => {
    setSearch(value.toLowerCase())
  }
  // console.log(search + 'search')
  return (
    <>
      <MainNavigation handleChange={handleChange} />
      <main>
        <Outlet context={[search]} />
      </main>
    </>
  )
}

export default RootLayout
