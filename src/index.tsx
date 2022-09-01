import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector' // TODO: Might be able to remove if it is only being grabbed from the path
import HttpApi from 'i18next-http-backend'

import App from './App'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ja'],
    fallbackLng: 'en',
    detection: {
      order: ['path'] // I am trying to get this to work with only the path and not rely on localstorage or cookies. Later on I want to also grab from the language settings of the browser.
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