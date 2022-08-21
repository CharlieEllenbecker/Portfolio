import { Outlet } from 'react-router-dom'
import i18next from 'i18next'

const App = () => {
  const lang = i18next.language

  return (
    <div className='app'>
      <Outlet />
    </div>
  )
}

export default App
