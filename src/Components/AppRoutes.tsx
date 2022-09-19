import { Routes, Route } from 'react-router-dom'
import { Page } from '../Pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Page />} />
        </Routes>
    )
}

export default AppRoutes