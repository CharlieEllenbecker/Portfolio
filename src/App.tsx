import { Routes, Route, BrowserRouter } from 'react-router-dom'

import AppRoutes from './Components/AppRoutes'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<AppRoutes />} />
        <Route path={'/en/*'} element={<AppRoutes />} />
        <Route path={'/ja/*'} element={<AppRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
