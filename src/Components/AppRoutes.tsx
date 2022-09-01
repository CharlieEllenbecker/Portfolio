import { Routes, Route } from 'react-router-dom'
import { About, DashboardPage } from '../Pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<DashboardPage />} />
            <Route path='about' element={<About />} />
        </Routes>
    )
}

export default AppRoutes