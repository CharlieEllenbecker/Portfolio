import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Projects from './Projects'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  )
}

export default AppRoutes