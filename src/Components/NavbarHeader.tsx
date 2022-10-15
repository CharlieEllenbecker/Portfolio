import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const NavbarHeader = () => {
  const { t } = useTranslation()
  const lang = i18next.language

  return (
    <header id="header">
      <div id="header-title">
        <button id="header-title-button" onClick={() => window.location.href = `/${lang}`}>
          <h2>{t('charlie')}</h2>
        </button>
      </div>
      <div id="header-buttons">
        <button className="header-button" onClick={() => window.location.href = "/en"}>English</button>
        <button className="header-button" onClick={() => window.location.href = "/ja"}>日本語</button>
      </div>
    </header>
  )
}

export default NavbarHeader