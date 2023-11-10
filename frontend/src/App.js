import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import CourseDetails from './pages/CourseDetails'
import RootLayout from './pages/Root'
import ErrorPage from './pages/ErrorPage'
import UserDashboard from './pages/UserDashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'course/:courseId', element: <CourseDetails /> },
      { path: 'user/:userId', element: <UserDashboard /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
