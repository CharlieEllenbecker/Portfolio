import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

import App from './App'
import { Dashboard, About } from './Pages';


i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ja'],
    fallbackLng: 'en',
    detection: {
      order: ['path']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json'
    }
  })

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path=':lang' element={<Dashboard />}>  {/* Something like this? */}
            <Route path='about' element={<About />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
)