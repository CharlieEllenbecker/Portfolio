import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

import App from './App'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ja'],
    fallbackLng: window.navigator.language,
    detection: {
      order: ['path', 'navigator']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json'
    }
  })

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)